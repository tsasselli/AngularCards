import { Component, OnInit } from "@angular/core";
import Deck from "../classes/Deck";
import ICard from "../interfaces/ICard";

@Component({
	selector: "application",
	templateUrl: "./app.html"
})
export class AppComponent implements OnInit {
	public deck: Deck; // refrences the Deck.ts file
	public drawCard: ICard; // ref the Icard model
	// makes an array for that ICard model so we can add the cards when build deck gets ran
	public cards: ICard[];

	public ngOnInit(): void {
		// triggers the build of a new deck, it gets build by the Deck.ts file's constructor runing _buildDeck
		this.deck = new Deck;
		this.cards = [];
	}

	public pickCard() {
		// use this.deck to access Deck.ts and get the drawCard method
		this.drawCard = this.deck.drawCard();
		// push the value of drawCard into the cards array
		this.cards.push(this.drawCard);
	}

	getCardCount() {
		// return a card count so we can use this in the HTML file to check if 
		// any cards left and return a count to the user
		return this.deck.getCardCount();
	}

	returnCardToDeck(card) {
		// gets method from Deck.ts to return the card to the deck
		this.deck.returnCardToDeck(card);
		// gets the index of the current card(provided by *ngFor loop in html) and deletes 1
		this.cards.splice(this.cards.indexOf(card), 1);
	}

	getLastPickedCard(): string {
		if (!this.cards.length) return; /// will hit return if no length left to cards.. saftey net

		const lastCardPicked = this.cards[0]; // grabs the index of last card picked in array

		return lastCardPicked.rank + " of " + lastCardPicked.suit; // returns the card info
	}

	//creates a function that sets and manipulates the width of the bar based off of card count divided by total(52)
	cardCountBarWidth() {
		const initalWidth = 170
		return this.deck.getCardCount() / this.deck.getTotalCardCount() * initalWidth;
	}

	resetDeck() {
		this.cards = []; // emptys the local card array
		this.deck = new Deck; //sets a new deck build
	}
}

