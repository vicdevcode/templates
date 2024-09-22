package entities

type ValidatedExample struct {
	Example
	isValidated bool
}

func (ve *ValidatedExample) IsValid() bool {
	return ve.isValidated
}

func NewValidatedExample(example *Example) (*ValidatedExample, error) {
	if err := example.validate(); err != nil {
		return nil, err
	}

	return &ValidatedExample{
		Example:     *example,
		isValidated: true,
	}, nil
}
