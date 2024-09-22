package main

import (
	"flag"

	"ddd-arch/internal/infrastructure/database/sqlite"
)

func main() {
	db, err := sqlite.NewConnection("test.db")
	if err != nil {
		panic(err)
	}
	runType := flag.String("run", "", "")

	flag.Parse()

	sqlite.Migrate(*runType, db)
}
