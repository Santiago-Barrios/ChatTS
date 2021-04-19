import db from "mongoose";

db.Promise = global.Promise;

const connect = async (uri) => {

    await db.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then( () => {
            console.log('[db] Conectada con éxito');
        })
        .catch( e =>{
            console.error( "[db connection] Conecction failed", e.message );
        });

}

export default connect;
