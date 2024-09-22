package http

import (
	"github.com/gin-gonic/gin"

	"ddd-arch/internal/application/interfaces"
)

func New(handler *gin.Engine, services interfaces.Services) {
	h := handler.Group("/api/v1")

	NewExampleController(h, services.ExampleService)
}
