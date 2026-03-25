# Ejercicio API - Fetch 

- **API seleccionada:** PokeAPI (recomendada en las instrucciones del lab).

- La evidencia de que cree la colección y el environment en Postman la coloque en el folder de *Imagenes de Postman*.

- Mi primer recurso es *pokémon*, y mi segundo recurso es *ability*.

### Request 1: Listar recurso principal 
`https://pokeapi.co/api/v2/pokemon`
<br>
<img width="365" height="56" alt="image" src="https://github.com/user-attachments/assets/6482cad5-5f33-4cc1-8c65-bae3497d5cff" />
<br>
El endpoint da mi recurso principal que es el de pokémon.

### Request 2: Detalle por ID 
`https://pokeapi.co/api/v2/pokemon/132`
<br>
<img width="365" height="56" alt="image" src="https://github.com/user-attachments/assets/5313f1bb-91a7-4a05-bb92-4c83312ab5b7" />
<br>
Se consulta el recurso usando el ID almacenado.

### Request 3: Búsqueda 
`https://pokeapi.co/api/v2/pokemon/ditto`
<br>
<img width="365" height="56" alt="image" src="https://github.com/user-attachments/assets/6fdfa4ee-80cb-40ea-8bb1-b58507c2af7d" />
<br>
Esta API permite obtener pokémon tanto por ID o por nombre. Entonces se puede implementar una búsqueda utilizando el nombre del pokémon si el usuario lo conoce. Ahora, esta API no permite parámetros de búsqueda, sino que hay que irse directamente al endpoint correspondiente.

### Request 4: Filtro avanzado 
`https://pokeapi.co/api/v2/ability/?limit=20&offset=20`
<br>
<img width="365" height="56" alt="image" src="https://github.com/user-attachments/assets/70a53898-ae94-41b5-8222-4c3461219763" />
<br>
Utilicé el habilidad + limite que mencionaban las instrucciones. No hay muchas combinaciones disponibles para este API. 

### Request 5: Paginación o equivalente 
`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20`
<br>
<img width="365" height="56" alt="image" src="https://github.com/user-attachments/assets/0248b8c9-bd68-4b41-8e0c-1add061715b5" />
<br>
No utiliza páginas, sino límites y offset. La diferencia es que, si la página 1 fueran los primeros 20 pokémon que devuelve el recurso principal por defecto, la página 2 serían los siguientes 20 pokémon. Aquí en vez de decir página 2, llamamos a los siguientes 20 y hacemos un offset de 20 para ignorar los primeros 20 que ya recibimos.

### Request 6: Segundo recurso 
`https://pokeapi.co/api/v2/ability`
<br>
<img width="365" height="56" alt="image" src="https://github.com/user-attachments/assets/24647e5b-8f6f-42f4-9ee8-bd26bbf80a19" />
<br>
Mi segundo recurso que estoy solicitado es "ability".
