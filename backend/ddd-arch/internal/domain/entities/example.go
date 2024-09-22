package entities

import (
	"errors"
	"time"
)

type Example struct {
	ID        uint
	Name      string
	CreatedAt time.Time
	UpdatedAt time.Time
}

func NewExample(name string) *Example {
	return &Example{
		Name:      name,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}
}

func (e *Example) validate() error {
	if e.Name == "" {
		return errors.New("name must not be empty")
	}

	return nil
}

func (e *Example) UpdateName(name string) error {
	e.Name = name
	e.UpdatedAt = time.Now()

	return e.validate()
}

func (e *Example) UpdateID(id uint) error {
	e.ID = id
	e.UpdatedAt = time.Now()

	return e.validate()
}
