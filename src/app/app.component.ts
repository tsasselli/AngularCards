import { Component, OnInit } from "@angular/core";
import Deck from "../classes/Deck";
import ICard from "../interfaces/ICard";

@Component({
	selector: "application",
	templateUrl: "./app.html"
})
export class AppComponent implements OnInit {
	// write your component code here; create the properties and methods you need to get the job
	// done as described in "app.html"; start by importing modules you need such as "./../classes/Deck"
	public deck: Deck;
	public drawCard: ICard;
	public cards: ICard[];

	public ngOnInit(): void {
		this.deck = new Deck
		this.cards = [];
	}

	public pickCard() {
		this.drawCard = this.deck.drawCard();
		console.log(this.drawCard);
		this.cards.push(this.drawCard);
	}
}
