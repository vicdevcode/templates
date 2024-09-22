package interfaces

import "ddd-arch/internal/application/dto"

type Services struct {
	ExampleService
}

type ExampleService interface {
	Create(*dto.CreateExample) (*dto.CreateExampleResult, error)
}
