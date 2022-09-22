import { useEffect, useState} from "react";
import firebase from "../utils/firebase-config";

const useCatalogData = (fieldName) => {

    const [data, setData] = useState();

    useEffect(() => {
        firebase
            .database()
            .ref()
    })

}