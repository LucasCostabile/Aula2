//Aqui, estamos definindo a classe
class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(productData) {
      // Validação dos campos obrigatórios
      if (!productData.title || !productData.description || !productData.price || !productData.thumbnail || !productData.code || !productData.stock) {
        console.error("Erro de cadastro: Todos os campos são obrigatórios para cadastrar qualquer produto.");
        return;
      }
  
      // Verifica se o código já está em uso
      if (this.products.some(product => product.code === productData.code)) {
    console.error(`O Código:${productData.code} já foi usado. Por favor, verifique o código dos outros produtos que esta querendo cadastrar e escolha outro código.`);
        return;
      }
  
      // Incremento automático do ID
      const productId = this.products.length + 1;
  
      // Criação do objeto produto
      const newProduct = {
        id: productId,
        title: productData.title,
        description: productData.description,
        price: productData.price,
        thumbnail: productData.thumbnail,
        code: productData.code,
        stock: productData.stock,
      };
  
      // Adiciona o produto ao array
      this.products.push(newProduct);
  
      console.log("Produto adicionado com sucesso:", newProduct);
    }
  
    getProductById(productId) {
      const foundProduct = this.products.find(product => product.id === productId);
  
      if (foundProduct) {
        console.log("Produto encontrado:", foundProduct);
      } else {
        console.error(`Produto com Id:${productId} não encontrado`);
      }
    }
  }
  
  // Exemplo de uso
  const productManager = new ProductManager();
  
    productManager.addProduct({
    title: "Produto 1",
    description: "Descrição do Produto 1",
    price: 19.99,
    thumbnail: "/path/to/image1.jpg",
    code: "P2",
    stock: 50,
  }); 
  
    productManager.addProduct({
    title: "Produto 2",
    description: "Descrição do Produto 2",
    price: 29.99,
    thumbnail: "/path/to/image2.jpg",
    code: "P2",
    stock: 30,
  }); 


  // ADICIONANDO UM PRODUTO FALTANDO O TITTLE
  productManager.addProduct({
    description: "Descrição do Produto 2",
    price: 29.99,
    thumbnail: "/path/to/image2.jpg",
    code: "P3",
    stock: 30,
  }); 

  
   productManager.getProductById(1); // Produto encontrado
   productManager.getProductById(3); // Produto não encontrado 
  