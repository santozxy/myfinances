// Criação de um novo ID
export function createNewID(result) {
  let maxId = 0;
  result.forEach((item) => {
    if (item.id > maxId) {
      maxId = item.id;
    }
  });
  // Novo ID como o maior ID encontrado mais 1
  return maxId + 1;
}
