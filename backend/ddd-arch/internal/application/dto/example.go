package dto

import (
	"time"
)

type CreateExample struct {
	ID   uint
	Name string
}

type CreateExampleResult struct {
	Result *ExampleResult
}

type ExampleResult struct {
	ID        uint
	Name      string
	CreatedAt time.Time
	UpdatedAt time.Time
}
