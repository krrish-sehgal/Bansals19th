// Function to shuffle the puzzle pieces

function shufflePuzzle() {
    // Define an array to store the IDs of puzzle pieces
    const puzzlePieceIds = ['piece1', 'piece2', 'piece3', 'piece4', 'piece5', 'piece6', 'piece7', 'piece8'];
  
    // Get the empty piece
    const emptyPiece = document.getElementById('emptyPiece');
  
    // Iterate over the puzzle pieces array and shuffle
    for (let i = puzzlePieceIds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
  
      // Swap the positions of puzzle pieces
      const temp = puzzlePieceIds[i];
      puzzlePieceIds[i] = puzzlePieceIds[j];
      puzzlePieceIds[j] = temp;
    }
  
    // Apply the shuffled positions to the puzzle pieces
    puzzlePieceIds.forEach((id, index) => {
      const piece = document.getElementById(id);
      piece.style.gridColumn = `${(index % 3) + 1} / span 1`; // Adjust column position
      piece.style.gridRow = `${Math.floor(index / 3) + 1} / span 1`; // Adjust row position
    });
  
    // Move the empty piece to the last position
    emptyPiece.style.gridColumn = '3 / span 1';
    emptyPiece.style.gridRow = '3 / span 1';
  }
  
  // Function to handle when a puzzle piece is clicked or dragged

function handlePieceClick(event) {
    const clickedPiece = event.target; // Get the clicked puzzle piece
    const emptyPiece = document.getElementById('emptyPiece');
  
    // Get the row and column of the clicked piece
    const clickedRow = parseInt(clickedPiece.style.gridRow);
    const clickedCol = parseInt(clickedPiece.style.gridColumn);
  
    // Get the row and column of the empty piece
    const emptyRow = parseInt(emptyPiece.style.gridRow);
    const emptyCol = parseInt(emptyPiece.style.gridColumn);
  
    // Check if the clicked piece is adjacent to the empty piece
    const rowDiff = Math.abs(clickedRow - emptyRow);
    const colDiff = Math.abs(clickedCol - emptyCol);
  
    if ((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)) {
      // Swap the positions of the clicked piece and the empty piece
      clickedPiece.style.gridColumn = emptyCol;
      clickedPiece.style.gridRow = emptyRow;
      emptyPiece.style.gridColumn = clickedCol;
      emptyPiece.style.gridRow = clickedRow;
    }
  }
  

  
  // Add event listener for shuffle button
  document.getElementById('shuffleBtn').addEventListener('click', shufflePuzzle);
  
  // Add event listeners for puzzle pieces
  const puzzlePieces = document.querySelectorAll('.puzzle-piece');
  puzzlePieces.forEach(piece => {
    piece.addEventListener('click', handlePieceClick);
  });
  