import SocketIO from "socket.io";
import { v4 as uuid } from "uuid";
import { Card } from "./Card";

interface PlayerInterface {
  id: string;
  socket: SocketIO.Socket | null;
  bot: boolean;
  inRoom: boolean;
  roomId: string;
  cards: Card[];
  mustStack: boolean;

  clearPlayableCards(): void;
  findPlayableCards(topCard: Card): void;
}
export default class Player implements PlayerInterface {
  id = "";
  socket;

  username = "";
  bot = false;
  inRoom = false;
  roomId = "";
  cards: Card[] = [];
  mustStack: boolean = false;
  hasCalledUno: boolean = false;

  constructor(socket: SocketIO.Socket | null, bot: boolean = false) {
    this.bot = bot;
    this.id = uuid();
    this.socket = socket;
  }

  clearPlayableCards() {
    this.cards.forEach((card) => (card.playable = false));
  }

  findPlayableCards(topCard: Card) {
    this.cards.forEach((card) => card.checkIfPlayable(topCard, this.mustStack));
  }
}