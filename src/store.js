// importo il metodo che andrà a crearmi l'oggetto
import {reactive} from 'vue'

// creo l'oggetto e lo salvo in una variabile
export const store = reactive({
    // array vuoto dove andrò a salvare i dati estrapolati
    cardList: [],
    // URL dell'API al quale andremo a fare la richiesta dei file
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",

    // parametro per la Key archetipo
    apiArchetypeParam: 'archetype',

    // URL dell'API per prendere solo gli archetipi
    apiURLArchetype: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    archetypeList:[],
    // archetipo selezioonato per il v-model
    archetypeSelected: '',

});

