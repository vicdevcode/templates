package sqlite

import "ddd-arch/internal/domain/entities"

func toDatabaseExample(example *entities.ValidatedExample) *Example {
	e := &Example{
		ID:        example.ID,
		Name:      example.Name,
		CreatedAt: example.CreatedAt,
		UpdatedAt: example.UpdatedAt,
	}

	return e
}

func fromDatabaseExample(dbExample *Example) *entities.Example {
	e := &entities.Example{
		ID:        dbExample.ID,
		Name:      dbExample.Name,
		CreatedAt: dbExample.CreatedAt,
		UpdatedAt: dbExample.UpdatedAt,
	}

	return e
}
