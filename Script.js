const cells=document.querySelectorAll(".cell");
const statusText=document.getElementById("status");
const resetButton=document.getElementById("reset");
let board=["","","","","","","","",""];
let currentPlayer="X";
let isGameActive=true;
const winningCombinations=
[
    [0,1,2],[3,4,5],[6,7,8], 
    [0,3,6],[1,4,7],[2,5,8], 
    [0,4,8],[2,4,6]
];
function handleCellClick(event)
{
    const index = event.target.dataset.index;
    if (board[index]===""&&isGameActive)
    {
        board[index]=currentPlayer;
        event.target.textContent=currentPlayer;
        checkWinner();
        currentPlayer=currentPlayer==="X"?"O":"X";
        statusText.textContent=`Player ${currentPlayer}'s turn`;
    }
}
function checkWinner()
{
    for (let combination of winningCombinations)
    {
        let[a,b,c]=combination;
        if (board[a]&& board[a]===board[b]&&board[a]===board[c])
        {
            statusText.textContent=`Player ${board[a]} Wins!`;
            isGameActive=false;
            return;
        }
    }
    if (!board.includes(""))
    {
        statusText.textContent="It's a Draw!";
        isGameActive=false;
    }
}
function resetGame()
{
    board.fill("");
    isGameActive=true;
    currentPlayer="X";
    statusText.textContent="Player X's turn";
    cells.forEach(cell=>(cell.textContent=""));
}
cells.forEach(cell=>cell.addEventListener("click",handleCellClick));
resetButton.addEventListener("click",resetGame);
