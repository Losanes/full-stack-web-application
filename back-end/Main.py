from Wrapper import Wrapper
import cherrypy

@cherrypy.expose
class Pagina:
    def __init__(self):
        self._w = Wrapper()

    @cherrypy.tools.json_out()
    def GET(self, richiesta):
        if richiesta == "Personale":
            dati = self._w.readPersonale()
            return dati
        elif richiesta == "Acquario":
            dati = self._w.readAcquario()
            return dati
        elif richiesta == "Sale":
            dati = self._w.readSale()
            return dati
        else:
            cherrypy.response.status = 404
            return {"errore": "richiesta non consentita"}
        
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def POST(self):
        dati = cherrypy.request.json
        if dati["insert"] == "Personale":
            esito = self._w.writePersonale(dati["nome"], dati["cognome"], dati["email"], dati["telefono"], dati["idacquario"])
            return {"esito": esito}
        elif dati["insert"] == "Acquario":
            esito = self._w.writeAcquario(dati["nome"])
            return {"esito": esito}
        elif dati["insert"] == "Sale":
            esito = self._w.writeSale(dati["idacquario"], dati["tema"])
            return {"esito": esito}
        else:
            return {"errore": "insert non consentito"}
        
conf = {
    '/': {
        'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
        'tools.response_headers.on': True,
        'tools.response_headers.headers': {
            ('Access-Control-Allow-Origin', '*')
        }
    }
}  
cherrypy.quickstart(Pagina(), '/', conf)