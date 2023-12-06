async function update() {
    const select = document.getElementById('ranks1')

    const option = select.options[select.selectedIndex].value;
    const price = document.getElementById('price')
    const button = document.getElementById('purchase_url')

    // console.log(option)

    async function loadJSONFile(filePath) {
        try {
            const response = await fetch(filePath);
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error("Erro ao carregar o arquivo JSON:", error);
            return null;
        }
    }

    const jsonFilePath = "./json/coachPriceLinks.json";
    const jsonData = await loadJSONFile(jsonFilePath);

    if (jsonData) {
        const find = option.toLowerCase();
        const foundItem = jsonData.find(item => item.Name.toLowerCase() == find);

        if (foundItem) {
            const itemPrice = foundItem.Price;
            const url = foundItem.URL;
            price.textContent = `R$ ${itemPrice},00`
            button.href = url
        } else {
            // Se o item não for encontrado
            console.log("Item não encontrado no JSON");
            price.textContent = 'Inválido'
        }
    }
}