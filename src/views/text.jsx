<form>
  <h4>Dados Pessoais:</h4>
  <FormInputs
    ncols={["col-sm-2 col-xs-6", "col-sm-2 col-xs-6", "col-sm-3 col-xs-6", "col-sm-1 col-xs-6", "col-sm-2 col-xs-6", "col-sm-2 col-xs-6", "col-sm-2 col-xs-6", "col-sm-3 col-xs-6", "col-sm-3 col-xs-6", "col-sm-2 col-xs-6", "col-sm-2 col-xs-6"]}
    proprieties={[
      {
        label: "Prontuario",
        type: "text",
        bsClass: "form-control",
        defaultValue: "10005789",
        disabled: true
      },
      {
        label: "UserName",
        type: "text",
        bsClass: "form-control",
        defaultValue: "Thiago.Nascimento",
        disabled: true
      },
      {
        label: "Nome Completo",
        type: "text",
        bsClass: "form-control",
        placeholder: "Digite aqui o nome completo",
        defaultValue: "Thiago Nascimento Blizz Castro"
      },
      {
        label: "Sexo",
        type: "text",
        bsClass: "form-control cpf-mask",
        placeholder: "Masculino / Feminino",
        defaultValue: "Mas."
      },
      {
        label: "Data Nasc.",
        type: "date",
        bsClass: "form-control"
      },
      {
        label: "CPF",
        type: "text",
        bsClass: "form-control cpf-mask",
        placeholder: "Número do CPF",
        defaultValue: "000.000.000-00"
      },
      {
        label: "RG",
        type: "text",
        bsClass: "form-control",
        placeholder: "Digite aqui seu RG",
        defaultValue: "MG-5599553"
      },
      {
        label: "Nome do pai",
        type: "text",
        bsClass: "form-control",
        placeholder: "Nome do pai",
        defaultValue: "José Geraldo Martins de Castro"
      },
      {
        label: "Nome da mãe",
        type: "text",
        bsClass: "form-control",
        placeholder: "Nome da mãe",
        defaultValue: "Cleia Nascimento"
      },
      {
        label: "Plano de saúde",
        type: "text",
        bsClass: "form-control",
        placeholder: "Plano de saúde",
        defaultValue: "UNIMED"
      },
      {
        label: "Titular",
        type: "text",
        bsClass: "form-control",
        placeholder: "Nome do titular",
      },
    ]}
  />
  <h4>Contato:</h4>
  <FormInputs
    ncols={["col-sm-3", "col-sm-3", "col-sm-3", "col-sm-3"]}
    proprieties={[
      {
        label: "Telefone 1",
        type: "text",
        bsClass: "form-control",
        placeholder: "Número de Telefone",
        defaultValue: "(99) 99999-9999"
      },
      {
        label: "Telefone 2",
        type: "text",
        bsClass: "form-control",
        placeholder: "Número de Telefone",
        defaultValue: "(88) 88888-8888"
      },
      {
        label: "whatsApp",
        type: "text",
        bsClass: "form-control",
        placeholder: "Número do WhatsApp",
        defaultValue: "(99) 99999-9999"
      },
      {
        label: "E-mail",
        type: "email",
        bsClass: "form-control",
        placeholder: "Endereço de E-mail",
        defaultValue: "Exemplo@email.com"
      }
    ]}
  />
  <h4>Endereço:</h4>
  <FormInputs
    ncols={["col-sm-2", "col-sm-5", "col-sm-2", "col-sm-3", "col-sm-4", "col-sm-4", "col-sm-4"]}
    proprieties={[
      {
        label: "CEP",
        type: "text",
        bsClass: "form-control",
        placeholder: "CEP",
        defaultValue: "30300-031"
      },
      {
        label: "Endereço",
        type: "text",
        bsClass: "form-control",
        placeholder: "Rua / Av ",
        defaultValue: "Av Jóse Barcelos"
      },
      {
        label: "Número",
        type: "text",
        bsClass: "form-control",
        placeholder: "Número",
        defaultValue: "1215"
      },
      {
        label: "Complemento",
        type: "text",
        bsClass: "form-control",
        placeholder: "Apto / Casa",
        defaultValue: "Apto 402"
      },
      {
        label: "Bairro",
        type: "text",
        bsClass: "form-control",
        placeholder: "Nome do Bairro",
        defaultValue: "Vila Militar"
      },
      {
        label: "Cidade",
        type: "text",
        bsClass: "form-control",
        placeholder: "Cidade",
        defaultValue: "Belo Horizonte"
      },
      {
        label: "Estado",
        type: "text",
        bsClass: "form-control",
        placeholder: "Estado",
        defaultValue: "Minas Gerais"
      }
    ]}
  />
  <div className="row">
    <div className="col-md-12">
      <FormGroup controlId="formControlsTextarea">
        <h4>Observação:</h4>
        <ControlLabel></ControlLabel>
        <FormControl
          rows="3"
          componentClass="textarea"
          bsClass="form-control"
          placeholder="Here can be your description"
          defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
        />
      </FormGroup>
    </div>
  </div>
  <Button bsStyle="success" pullRight fill type="submit">
    Salvar
                    </Button>
  <div className="clearfix" />
</form>