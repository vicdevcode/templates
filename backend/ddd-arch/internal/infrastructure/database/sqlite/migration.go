package sqlite

import (
	"fmt"
	"log"

	"gorm.io/gorm"
)

func Migrate(runType string, db *gorm.DB) {
	switch runType {
	case "create":
		if err := create(db); err != nil {
			panic(err)
		}
	case "drop":
		if err := drop(db); err != nil {
			panic(err)
		}
	case "reset":
		if err := drop(db); err != nil {
			panic(err)
		}
		if err := create(db); err != nil {
			panic(err)
		}
	default:
		panic("?")
	}
	log.Println(fmt.Sprintf("database successfully migrated: %s", runType))
}

func create(db *gorm.DB) error {
	if err := db.AutoMigrate(
		&Example{},
	); err != nil {
		return err
	}
	return nil
}

func drop(db *gorm.DB) error {
	tables := []string{"examples"}
	for _, t := range tables {
		if err := db.Exec(fmt.Sprintf("DROP TABLE IF EXISTS %s", t)).Error; err != nil {
			return err
		}
	}
	return nil
}
