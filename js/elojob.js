async function teste(value) {
    function updateFirstSelect() {
        const image = document.getElementById('rankImage1')
        var firstSelect = document.getElementById("ranks1");
        var secondSelect = document.getElementById("ranks1.5");
        var firstSelectedOption = firstSelect.options[firstSelect.selectedIndex].value;

        var rank1 = document.getElementById('rank1')
        rank1.textContent = `${firstSelectedOption} 1`

        if (firstSelectedOption === "Radiante") {
            secondSelect.innerHTML = '<option value="1">1</option>';
            image.src = `./imgs/ranks/${firstSelectedOption}.png`
        } else {
            secondSelect.innerHTML = '<option value="1">1</option><option value="2">2</option><option value="3">3</option>';
            image.src = `./imgs/ranks/${firstSelectedOption}_1.png`
        }
    }

    function updateFirstImage() {
        const image = document.getElementById('rankImage1')
        var firstSelect = document.getElementById("ranks1");
        var secondSelect = document.getElementById("ranks1.5");
        var firstSelectedOption = firstSelect.options[firstSelect.selectedIndex].value;
        var secondSelectedOption = secondSelect.options[secondSelect.selectedIndex].value;

        var rank1 = document.getElementById('rank1')
        rank1.textContent = firstSelectedOption + ' ' + secondSelectedOption

        image.src = `./imgs/ranks/${firstSelectedOption}_${secondSelectedOption}.png`
    }

    function updateSecondSelect() {
        const image = document.getElementById('rankImage2')
        var firstSelect = document.getElementById("ranks2");
        var secondSelect = document.getElementById("ranks2.5");
        var firstSelectedOption = firstSelect.options[firstSelect.selectedIndex].value;

        var rank2 = document.getElementById('rank2')
        rank2.textContent = `${firstSelectedOption} 1`

        if (firstSelectedOption === "Radiante") {
            secondSelect.innerHTML = '<option value="1">1</option>';
            image.src = `./imgs/ranks/${firstSelectedOption}.png`
        } else {
            secondSelect.innerHTML = '<option value="1">1</option><option value="2">2</option><option value="3">3</option>';
            image.src = `./imgs/ranks/${firstSelectedOption}_1.png`
        }
    }

    function updateSecondImage() {
        const image = document.getElementById('rankImage2')
        var firstSelect = document.getElementById("ranks2");
        var secondSelect = document.getElementById("ranks2.5");

        var firstSelectedOption = firstSelect.options[firstSelect.selectedIndex].value;
        var secondSelectedOption = secondSelect.options[secondSelect.selectedIndex].value;

        var rank2 = document.getElementById('rank2')
        rank2.textContent = firstSelectedOption + ' ' + secondSelectedOption

        image.src = `./imgs/ranks/${firstSelectedOption}_${secondSelectedOption}.png`
    }

    if (value == 'updateFirstSelect') {
        updateFirstSelect()
    } else if (value == 'updateFirstImage') {
        updateFirstImage()
    } else if (value == 'updateSecondSelect') {
        updateSecondSelect()
    } else if (value == 'updateSecondImage') {
        updateSecondImage()
    }

    const priceId = document.getElementById('price')
    const purchaseUrl = document.getElementById('purchase_url')

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

    const jsonFilePath = "./json/elojobPriceLinks.json";
    const jsonData = await loadJSONFile(jsonFilePath);

    if (jsonData) {
        let rank1 = document.getElementById("rank1").textContent.toLocaleLowerCase();
        let rank2 = document.getElementById("rank2").textContent.toLocaleLowerCase();

        const find = `${rank1} ao ${rank2}`;
        const foundItem = jsonData.find(item => item.Name.toLowerCase() === find);

        console.log(find)
        if (foundItem) {
            // Se o item for encontrado, exibir os valores de Price e URL
            const price = foundItem.Price;
            const url = foundItem.URL;
            priceId.textContent = `R$ ${price},00`
            purchaseUrl.href = url
        } else {
            // Se o item não for encontrado
            console.log("Item não encontrado no JSON");
            priceId.textContent = 'Inválido'
        }
    }
}