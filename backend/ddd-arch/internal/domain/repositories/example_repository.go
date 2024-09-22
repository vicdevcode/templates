package repositories

import "ddd-arch/internal/domain/entities"

type ExampleRepository interface {
	Create(example *entities.ValidatedExample) (*entities.Example, error)
}
