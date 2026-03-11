function findPath(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  function dfs(r, c, index) {
    if (index === word.length) return true;

    if (r < 0 || c < 0 || r >= rows || c >= cols || visited[r][c]) return false;

    if (board[r][c] !== word[index] && board[r][c] !== "?") return false;

    visited[r][c] = true;

    const found =
      dfs(r + 1, c, index + 1) || // down
      dfs(r - 1, c, index + 1) || // up
      dfs(r, c + 1, index + 1) || // right
      dfs(r, c - 1, index + 1); // left

    visited[r][c] = false;

    return found;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return 1;
    }
  }

  return 0;
}

const board = [
  ["A", "?", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];

console.log(findPath(board, "KH"));