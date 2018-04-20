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
	public deck: Deck; // refrences the Deck.ts file
	public drawCard: ICard; // ref the Icard model
	public cards: ICard[]; // makes an array for that model so we can add the cards when build deck gets ran

	public ngOnInit(): void {
		// triggers the build of a new deck, it gets build by the Deck.ts file's constructor runing _buildDeck
		this.deck = new Deck;
		this.cards = [];
	}

	public pickCard() {
		this.drawCard = this.deck.drawCard(); // use deck to access Deck.ts and get the drawCard method
		console.log(this.drawCard); 
		this.cards.push(this.drawCard); // push the value of drawCard into the cards array
	}

	getCardCount() {
		// return a card count so we can use this in the HTML file to check if any are left and return a count to the user
		return this.deck.getCardCount(); 
	}

	returnCardToDeck(card) {
		this.deck.returnCardToDeck(card); // gets method from Deck.ts to return the card to the deck
		this.cards.splice(this.cards.indexOf(card), 1); // gets the index of the current card and deletes 1
	}

	public getLastPickedCard(): string {

		if (!this.cards.length) return; /// will return if no length left to cards.. saftey net

		const lastCardPicked = this.cards[0]; // grabs the index of last card picked in array

		return lastCardPicked.rank + " of " + lastCardPicked.suit; // returns the card info
	}

	//creates a function that sets and manipulates the width of the bar based off of card count divided by total
	cardBarWidth() {
		const initalWidth = 170
		return this.deck.getCardCount() / this.deck.getTotalCardCount() * initalWidth;
	}

	resetDeck() {
		this.cards = [];
		this.deck = new Deck;
	}
}

