package postgres

import (
	"gorm.io/gorm"

	"ddd-arch/internal/domain/entities"
	"ddd-arch/internal/domain/repositories"
)

type ExampleRepository struct {
	db *gorm.DB
}

func NewExampleRepository(db *gorm.DB) repositories.ExampleRepository {
	return &ExampleRepository{db}
}

func (repo *ExampleRepository) Create(
	example *entities.ValidatedExample,
) (*entities.Example, error) {
	dbExample := toDatabaseExample(example)

	if err := repo.db.Create(dbExample).Error; err != nil {
		return nil, err
	}

	return repo.FindByID(dbExample.ID)
}

func (repo *ExampleRepository) FindByID(id int) (*entities.Example, error) {
	var dbExample Example
	if err := repo.db.First(&dbExample, id).Error; err != nil {
		return nil, err
	}

	return fromDatabaseExample(&dbExample), nil
}
