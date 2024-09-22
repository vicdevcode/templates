package services

import (
	"gorm.io/gorm"

	"ddd-arch/internal/application/interfaces"
	"ddd-arch/internal/infrastructure/database/sqlite"
)

func New(db *gorm.DB) interfaces.Services {
	return interfaces.Services{
		ExampleService: NewExampleService(sqlite.NewExampleRepository(db)),
	}
}
