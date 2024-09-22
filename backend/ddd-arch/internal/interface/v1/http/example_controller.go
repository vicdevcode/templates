package http

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"ddd-arch/internal/application/interfaces"
	"ddd-arch/internal/interface/v1/http/requests"
	"ddd-arch/internal/interface/v1/http/responses"
)

type ExampleController struct {
	service interfaces.ExampleService
}

func NewExampleController(handler *gin.RouterGroup, service interfaces.ExampleService) {
	controller := &ExampleController{service}

	h := handler.Group("/example")
	h.POST("/", controller.Create)
}

func (ec *ExampleController) Create(c *gin.Context) {
	var req requests.CreateExample

	if err := c.Bind(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "failed to parse request body"})
		return
	}

	body, err := req.Parse()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result, err := ec.service.Create(body)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	response := responses.ParseExample(result.Result)

	c.JSON(http.StatusCreated, response)
	return
}
