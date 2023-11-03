




export class Usuarios{
    public ID: number;
    public Nome: string;
    public Email: string;
    public Senha: string;
    public TipoUsuario: 'Cliente' | 'PrestadorServicos';
    public Telefone: string;
    public Endereco: string;
    public Cidade: string;
    public Estado: string;
    public CEP: string;
    public FotoPerfil: string;
    public DataCadastro: Date;

        constructor(ID: number, Nome: string, Email: string, Senha: string, TipoUsuario: 'Cliente' | 'PrestadorServicos', Telefone: string, Endereco: string, Cidade: string, Estado: string, CEP: string, FotoPerfil: string, DataCadstrado: Date){
            this.ID=ID;
            this.Nome=Nome;
            this.Email=Email;
            this.Senha=Senha;
            this.TipoUsuario=TipoUsuario;
            this.Telefone=Telefone;
            this.Endereco=Endereco;
            this.Cidade=Cidade;
            this.Estado=Estado;
            this.CEP=CEP;
            this.FotoPerfil=FotoPerfil;
            this.DataCadastro=DataCadstrado;
        }
    
    getID(): number{
        return this.ID;
    }

    getNome(): string{
        return this.Nome;
    }

    getEmail(): string{
        return this.Email;
    }

    getSenha(): string{
        return this.Senha;
    }

    getTipoUsuario(): string{
        return this.TipoUsuario;
    }

    getTelefone(): string{
        return this.Telefone;
    }

    getEndereco(): string{
        return this.Endereco;
    }

    getCidade(): string{
        return this.Cidade;
    }

    getEstado(): string{
        return this.Estado;
    }

    getCEP(): string{
        return this.CEP;
    }

    getFotoPerfil(): string{
        return this.FotoPerfil;
    }

    getDataCadastrado(): Date{
        return this.DataCadastro;
    }

}

export class PrestadoresDeServico{
    public ID: number
    public Profissao: string
    public Descricao: string
    public DisponibilidadeDia: string
    public DisponibilidadeHora: string
    public Telefone: string
    public Endereco: string
    public Cidade: string
    public Estado: string
    public CEP: string
    public FotoPerfil: string
    public DataCadastro: string

    constructor(ID: number, Profissao: string, Descrisao: string, DisponibilidadeDia: string, DisponibilidadeHora: string, Telefone: string, Endereco: string, Cidade: string, Estado: string, CEP: string, FotoPerfil: string, DataCadastrado: string){
        this.ID=ID;
        this.Profissao=Profissao;
        this.Descricao=Descrisao;
        this.DisponibilidadeDia=DisponibilidadeDia;
        this.DisponibilidadeHora=DisponibilidadeHora;
        this.Telefone=Telefone;
        this.Endereco=Endereco;
        this.Cidade=Cidade;
        this.Estado=Estado;
        this.CEP=CEP;
        this.FotoPerfil=FotoPerfil;
        this.DataCadastro=DataCadastrado;
    }

    getID(): number{
        return this.ID;
    }

    getProfissao(): string{
        return this.Profissao;
    }

    getDescricao(): string{
        return this.Descricao;
    }

    getDisponibilidadeDia(): string{
        return this.DisponibilidadeDia;
    }
    
    getDisponibilidadeHora(): string{
        return this.DisponibilidadeHora;
    }

    getTelefone(): string{
        return this.Telefone;
    }

    getEndereco(): string{
        return this.Endereco;
    }

    getCidade(): string{
        return this.Cidade;
    }

    getEstado(): string{
        return this.Estado;
    }

    getCEP(): string{
        return this.CEP;
    }

    getFotoPerfil(): string{
        return this.FotoPerfil;
    }

    getDataCadastro(): string{
        return this.DataCadastro;
    }
}

export class ServicosOferecidos{
    public ID: number;
    public ID_Prestador: number;
    public ID_Usuarios: number;
    public Localidade: string;
    public Tipo_Servico: string;
    public Orcamento: number;

    constructor(ID: number, ID_Prestador: number, ID_Usuarios: number, Localidade: string, Tipo_Usuario: string, Orcamento: number){
        this.ID=ID;
        this.ID_Prestador=ID_Prestador;
        this.ID_Usuarios=ID_Usuarios;
        this.Localidade=Localidade;
        this.Tipo_Servico=Tipo_Usuario;
        this.Orcamento=Orcamento;
    }

    getID(): number{
        return this.ID;
    }

    getID_Prestador(): number{
        return this.ID_Prestador;
    }

    getID_Usuarios(): number{
        return this.ID_Usuarios;
    }

    getLocalidade(): string{
        return this.Localidade;
    }

    getTipo_Servico(): string{
        return this.Tipo_Servico;
    }

    getOrcamente(): number{
        return this.Orcamento;
    }
}
//FOREIGN KEY (ID_Prestador) REFERENCES PrestadoresDeServico(ID),
//FOREIGN KEY (ID_Usuarios) REFERENCES Usuarios(ID)

export class Agendamentos{
    public ID: number;
    public ID_Cliente: number;
    public ID_Prestador: number;
    public Data_Hora_Agendamento: string;
    public Status: 'Agendado' | 'Em_Andamento' | 'Concluído' | 'Cancelado';
    public ComentariosNotas: string;

    constructor(ID: number, ID_Cliente: number, ID_Prestador: number, Data_Hora_Agendamento: string, Status: 'Agendado' | 'Em_Andamento' | 'Concluído' | 'Cancelado', ComentariosNotas: string){
        this.ID=ID;
        this.ID_Cliente=ID_Cliente;
        this.ID_Prestador=ID_Prestador;
        this.Data_Hora_Agendamento=Data_Hora_Agendamento;
        this.Status=Status;
        this.ComentariosNotas=ComentariosNotas;
    }

    getID(): number{
        return this.ID;
    }

    getID_Cliente(): number{
        return this.ID_Cliente;
    }

    getID_Prestador(): number{
        return this.ID_Prestador;
    }

    getData_Hora_Agendamento(): string{
        return this.Data_Hora_Agendamento;
    }

    getStatus(): string{
        return this.Status;
    }

    getComentariosNotas(): string{
        return this.ComentariosNotas;
    }
}
//FOREIGN KEY (ID_Cliente) REFERENCES Usuarios(ID),
//FOREIGN KEY (ID_Prestador) REFERENCES PrestadoresDeServico(ID)

export class Avaliacoes{
    public ID: number
    public ID_Prestador: number
    public ID_Cliente: number
    public Avaliacao_Media: number
    public Comentario: string
    public TipoUsuario: 'Cliente' | 'Prestador'

    constructor(ID: number, ID_Prestador: number, ID_Cliente: number, Avaliacao_Media: number, Comentario: string, TipoUsuario: 'Cliente' | 'Prestador'){
        this.ID=ID;
        this.ID_Prestador=ID_Prestador;
        this.ID_Cliente=ID_Cliente;
        this.Avaliacao_Media=Avaliacao_Media;
        this.Comentario=Comentario;
        this.TipoUsuario=TipoUsuario;
    }

    getID(): number{
        return this.ID;
    }

    getID_Prestador(): number{
        return this.ID_Prestador;
    }

    getID_Cliente(): number{
        return this.ID_Cliente;
    }

    getAvaliacao_Media(): number{
        return this.Avaliacao_Media
    }

    getComentario(): string{
        return this.Comentario;
    }

    getTipoUsuario(): string{
        return this.TipoUsuario;
    }
}
//FOREIGN KEY (ID_Prestador) REFERENCES PrestadoresDeServico(ID),
//FOREIGN KEY (ID_Cliente) REFERENCES Usuarios(ID)
