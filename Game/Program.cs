using GameSpace;

class Program
{
    static void Main(string[] args)
    {
        bool endGame = false;

        while (!endGame)
        {
            Game Game = new Game();
            Game.RunGame();
            endGame = true;
        }
    }
}