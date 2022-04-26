class Program
{
    static void Main(string[] args)
    {
        bool endGame = false;

        while (!endGame)
        {
            Game game = new Game();
            game.StartGame();
            endGame = true;
        }
    }
}
