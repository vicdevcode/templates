package requests

import "ddd-arch/internal/application/dto"

type CreateExample struct {
	Name string `json:"name"`
}

func (req *CreateExample) Parse() (*dto.CreateExample, error) {
	return &dto.CreateExample{
		Name: req.Name,
	}, nil
}
