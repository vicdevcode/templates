package services

import (
	"ddd-arch/internal/application/dto"
	"ddd-arch/internal/application/interfaces"
	"ddd-arch/internal/application/mapper"
	"ddd-arch/internal/domain/entities"
	"ddd-arch/internal/domain/repositories"
)

type ExampleService struct {
	exampleRepository repositories.ExampleRepository
}

func NewExampleService(exampleRepository repositories.ExampleRepository) interfaces.ExampleService {
	return &ExampleService{exampleRepository}
}

func (s *ExampleService) Create(data *dto.CreateExample) (*dto.CreateExampleResult, error) {
	newExample := entities.NewExample(data.Name)

	validatedExample, err := entities.NewValidatedExample(newExample)
	if err != nil {
		return nil, err
	}

	createdExample, err := s.exampleRepository.Create(validatedExample)
	if err != nil {
		return nil, err
	}

	validatedExample, err = entities.NewValidatedExample(createdExample)
	if err != nil {
		return nil, err
	}

	result := dto.CreateExampleResult{
		Result: mapper.NewExampleResultFromValidatedEntity(validatedExample),
	}

	return &result, nil
}
