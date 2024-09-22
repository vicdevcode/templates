package sqlite

import (
	sql "gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type GormSqlite struct {
	*gorm.DB
}

func NewConnection(path string) (*gorm.DB, error) {
	return gorm.Open(sql.Open(path), &gorm.Config{})
}
