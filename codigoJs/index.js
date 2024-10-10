class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque; 
        if(this.tipo === "mago"){
            ataque = "mágia"
        }else if(this.tipo === "guerreiro"){
            ataque = "espada"
        }else if(this.tipo === "monge"){
            ataque = "artes marciais"
        }else if(this.tipo === "ninja"){
            ataque = "usou shuriken"
        }else{
            ataque = "ataque físico"
        }

        console.log(`O ${this.tipo} de nome ${this.nome} atacou usando ${ataque}`)
    }
}

let heroi1 = new Heroi("Mestre dos Magos", 100, "mago" )
let heroi2 = new Heroi("Kratos", 56, "guerreiro" )
let heroi3 = new Heroi("Aang", 18, "monge" )
let heroi4 = new Heroi("Shinob", 28, "ninja" )
let heroi5 = new Heroi("Fabio", 34, "qualquer" )

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
heroi5.atacar()