package responses

import (
	"time"

	"ddd-arch/internal/application/dto"
)

type Example struct {
	ID        uint      `json:"id"`
	Name      string    `json:"name"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func ParseExample(example *dto.ExampleResult) *Example {
	return &Example{
		ID:        example.ID,
		Name:      example.Name,
		CreatedAt: example.CreatedAt,
		UpdatedAt: example.UpdatedAt,
	}
}
