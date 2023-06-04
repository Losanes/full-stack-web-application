import pymssql

class Wrapper:
    def __init__(self, server="5.172.64.20\SQLEXPRESS", username="CRD2122", password="xxx123##", db="CRD2122"):
        self._server = server
        self._username = username
        self._password = password
        self._db = db

    def connetti(self):
        try:
            return pymssql.connect(self._server, self._username, self._password, self._db)
        except:
            print("errore connessione")
        
    def disconnetti(self, conn):
        try:
            conn.close()
        except:
            print("errore disconnessione")
        
    def readAcquario(self):
        con = self.connetti()
        try:
            cur = con.cursor(as_dict=True)
            query = "SELECT * FROM V_Acquario"
            cur.execute(query)
            res = cur.fetchall()
            self.disconnetti(con)
            return res
        except Exception as e:
            print(e)
            self.disconnetti(con)
            return []
        
    def writeAcquario(self, nome):
        con = self.connetti()
        try:
            cur = con.cursor()
            query = "INSERT INTO V_Acquario VALUES (%s)"
            cur.execute(query, nome)
            con.commit()
            self.disconnetti(con)
            return True
        except Exception as e:
            print(e)
            return False
        
    def readPersonale(self):
        con = self.connetti()
        try:
            cur = con.cursor(as_dict=True)
            query = "SELECT * FROM V_Personale"
            cur.execute(query)
            res = cur.fetchall()
            self.disconnetti(con)
            return res
        except Exception as e:
            print(e)
            self.disconnetti(con)
            return []
        
    def writePersonale(self, nome, cognome, email, telefono, idacquario):
        con = self.connetti()
        try:
            cur = con.cursor()
            query = "INSERT INTO V_Personale VALUES (%s, %s, %s, %s, %d)"
            cur.execute(query, (nome, cognome, email, telefono, idacquario))
            con.commit()
            self.disconnetti(con)
            return True
        except Exception as e:
            print(e)
            return False
        
    def readSale(self):
        con = self.connetti()
        try:
            cur = con.cursor(as_dict=True)
            query = "SELECT * FROM V_Sale"
            cur.execute(query)
            res = cur.fetchall()
            self.disconnetti(con)
            return res
        except Exception as e:
            print(e)
            self.disconnetti(con)
            return []

    def writeSale(self, idacquario, tema):
        con = self.connetti()
        try:
            cur = con.cursor()
            query = "INSERT INTO V_Sale VALUES (%d, %s)"
            cur.execute(query, (idacquario, tema))
            con.commit()
            self.disconnetti(con)
            return True
        except Exception as e:
            print(e)
            return False