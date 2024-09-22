package mapper

import (
	"ddd-arch/internal/application/dto"
	"ddd-arch/internal/domain/entities"
)

func NewExampleResultFromValidatedEntity(example *entities.ValidatedExample) *dto.ExampleResult {
	return NewExampleResultFromEntity(&example.Example)
}

func NewExampleResultFromEntity(example *entities.Example) *dto.ExampleResult {
	if example == nil {
		return nil
	}

	return &dto.ExampleResult{
		ID:        example.ID,
		Name:      example.Name,
		CreatedAt: example.CreatedAt,
		UpdatedAt: example.UpdatedAt,
	}
}
