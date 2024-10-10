using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace desafio_classes_jogo.model
{
    public class Heroi
    {
        private string nome;
        private int idade;
        private string tipo; 
        public Heroi(string nome, int idade, string tipo){
            this.nome = nome;
            this.idade = idade; 
            this.tipo = tipo;
        }

        public void Atacar(){
        string ataque;
        if(this.tipo == "mago"){
            ataque = "mágia";
        }else if(this.tipo == "guerreiro"){
            ataque = "espada";
        }else if(this.tipo == "monge"){
            ataque = "artes marciais";
        }else if(this.tipo == "ninja"){
            ataque = "shuriken";
        }else{
            ataque = "ataque físico";
        }
        Console.WriteLine($"O {this.tipo} de nome {this.nome} atacou usando {ataque}");
    }
    }
}