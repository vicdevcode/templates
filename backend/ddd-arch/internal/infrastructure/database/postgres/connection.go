package postgres

import (
	pgsql "gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func NewConnection(dsn string) (*gorm.DB, error) {
	return gorm.Open(pgsql.Open(dsn), &gorm.Config{})
}
