import data from "/Dukaan-App/data.js";
   const myDataTable = document.createElement("table");
   const tabelRowsHeader = document.createElement("tr");
   const srNoLabel = document.createElement("th");
   const proNameLabel = document.createElement("th");
   const proWeightLabel = document.createElement("th");
   const proPriceLabel = document.createElement("th");
   
   const tableDatalabel = document.querySelector(".pricing-table");
   tableDatalabel.append(myDataTable);
   myDataTable.append(tabelRowsHeader);
   tabelRowsHeader.append(srNoLabel);
   tabelRowsHeader.append(proNameLabel);
   tabelRowsHeader.append(proWeightLabel);
   tabelRowsHeader.append(proPriceLabel);
   
   myDataTable.setAttribute("class", "w-full mx-auto");
   myDataTable.setAttribute("id", "myTable");
   tabelRowsHeader.setAttribute("class", "border-2 w-full mx-auto border-gray-800 text-red-500");
   srNoLabel.setAttribute("class", "border-2 border-gray-800 pl-2");
   proNameLabel.setAttribute("class", "border-2 border-gray-800 pl-2");
   proWeightLabel.setAttribute("class", "border-2 border-gray-800 pl-2");
   proPriceLabel.setAttribute("class", "border-2 border-gray-800 pl-2");
   
   srNoLabel.innerHTML = "S.no.";
   proNameLabel.innerHTML = "Product Name";
   proWeightLabel.innerHTML = "Product Weight";
   proPriceLabel.innerHTML = "Product MRP ( ₹ )";
 
 
const pricingtables = productsInfo => {
  // Create elements needed to build a card
  
  const tabelRowsData = document.createElement("tr");
  const srNo = document.createElement("th");
  const proName = document.createElement("td");
  const proWeight = document.createElement("td");
  const proPrice = document.createElement("td");
  
  // Append newly created elements into the DOM
  const tableData = document.querySelector(".pricing-table");
  
  myDataTable.append(tabelRowsData);
  tabelRowsData.append(srNo);
  tabelRowsData.append(proName);
  tabelRowsData.append(proWeight);
  tabelRowsData.append(proPrice);
  
  tabelRowsData.setAttribute("class", "border-2 border-gray-600");
  srNo.setAttribute("class", "counterCell border border-gray-600 px-2");
  proName.setAttribute("class", "border border-gray-600 px-2");
  proWeight.setAttribute("class", "border border-gray-600 px-2");
  proPrice.setAttribute("class", "border border-gray-600 px-2");
  
  proName.innerHTML = productsInfo.getproname;
  proWeight.innerHTML = productsInfo.getproweight;
  proPrice.innerHTML = productsInfo.getprorupees;
  
};
data.forEach(productsInfo => pricingtables(productsInfo));
