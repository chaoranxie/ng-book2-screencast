export class Article {
  // public title: string;
  // public description: string;
  //
  // constructor(
  //   aTitle: string,
  //   aDescription: string
  // ) {
  //   this.title = aTitle;
  //   this.description = aDescription;
  // }

  public publishedAt: Date;

  constructor(
    public title: string,
    public description: string,
    public votes?: number,
  ) {
    this.votes = votes || 0;
    this.publishedAt = new Date();
  }


  public voteUp(): void {
    this.votes = this.votes + 1;
  }
  public voteDown(): void {
    this.votes = this.votes -1;
  }
}
