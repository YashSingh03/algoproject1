import { Contract, GlobalState } from '@algorandfoundation/algorand-typescript'

export class HelloWorld extends Contract {
  watchlist = GlobalState<string>({ key: "watchlist", initialValue: "" });

  // Add a movie to the watchlist
  AddMovie(title: string, description: string): string {
    // Format: Title (Year): Description;
    const entry = `${title}: ${description}; `;
    this.watchlist.value = this.watchlist.value + entry;
    return title;
  }

  // View the full watchlist
  GetWatchlist(): string {
    return this.watchlist.value;
  }
}