package main

import (
	"github.com/gin-gonic/gin"

	"ddd-arch/internal/application/services"
	"ddd-arch/internal/infrastructure/database/sqlite"
	"ddd-arch/internal/interface/v1/http"
)

func main() {
	path := "./test.db"
	port := "localhost:5000"

	db, err := sqlite.NewConnection(path)
	if err != nil {
		panic(err)
	}

	services := services.New(db)

	handler := gin.Default()

	http.New(handler, services)

	handler.Run(port)
}
