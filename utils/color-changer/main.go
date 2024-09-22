package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"regexp"
	"strconv"
	"strings"
)

func main() {
	inputFile := "styles.css"
	outputFile := "styles_hsla.css"

	// Открываем входной файл
	input, err := os.Open(inputFile)
	if err != nil {
		fmt.Println("Ошибка при открытии входного файла:", err)
		return
	}
	defer input.Close()

	// Создаем выходной файл
	output, err := os.Create(outputFile)
	if err != nil {
		fmt.Println("Ошибка при создании выходного файла:", err)
		return
	}
	defer output.Close()

	scanner := bufio.NewScanner(input)
	writer := bufio.NewWriter(output)

	// Регулярные выражения для поиска HEX и RGBA цветов
	hexRegex := regexp.MustCompile(`#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})`)
	rgbaRegex := regexp.MustCompile(
		`rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(?:,\s*(\d*(?:\.\d+)?))?\)`,
	)

	for scanner.Scan() {
		line := scanner.Text()

		// Заменяем HEX цвета
		line = hexRegex.ReplaceAllStringFunc(line, func(hex string) string {
			r, g, b := hexToRGB(hex)
			return rgbToHSLA(r, g, b, 1)
		})

		// Заменяем RGBA цвета
		line = rgbaRegex.ReplaceAllStringFunc(line, func(rgba string) string {
			parts := rgbaRegex.FindStringSubmatch(rgba)
			r, _ := strconv.Atoi(parts[1])
			g, _ := strconv.Atoi(parts[2])
			b, _ := strconv.Atoi(parts[3])
			a := 1.0
			if len(parts) > 4 && parts[4] != "" {
				a, _ = strconv.ParseFloat(parts[4], 64)
			}
			return rgbToHSLA(r, g, b, a)
		})

		writer.WriteString(line + "\n")
	}

	writer.Flush()
	fmt.Println("Конвертация завершена. Результат сохранен в", outputFile)
}

func hexToRGB(hex string) (int, int, int) {
	hex = strings.TrimPrefix(hex, "#")
	if len(hex) == 3 {
		hex = string(
			hex[0],
		) + string(
			hex[0],
		) + string(
			hex[1],
		) + string(
			hex[1],
		) + string(
			hex[2],
		) + string(
			hex[2],
		)
	}
	r, _ := strconv.ParseInt(hex[0:2], 16, 0)
	g, _ := strconv.ParseInt(hex[2:4], 16, 0)
	b, _ := strconv.ParseInt(hex[4:6], 16, 0)
	return int(r), int(g), int(b)
}

func rgbToHSLA(r, g, b int, a float64) string {
	rf := float64(r) / 255
	gf := float64(g) / 255
	bf := float64(b) / 255

	max := math.Max(rf, math.Max(gf, bf))
	min := math.Min(rf, math.Min(gf, bf))

	l := (max + min) / 2
	var h, s float64

	if max == min {
		h, s = 0, 0
	} else {
		d := max - min
		if l > 0.5 {
			s = d / (2 - max - min)
		} else {
			s = d / (max + min)
		}

		switch max {
		case rf:
			h = (gf - bf) / d
			if gf < bf {
				h += 6
			}
		case gf:
			h = (bf-rf)/d + 2
		case bf:
			h = (rf-gf)/d + 4
		}
		h /= 6
	}

	return fmt.Sprintf("hsla(%.0f, %.0f%%, %.0f%%, %.2f)", h*360, s*100, l*100, a)
}
