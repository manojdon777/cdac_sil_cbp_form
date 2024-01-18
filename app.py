from flask import Flask, render_template, request, redirect, url_for
import mysql.connector
import datetime

mydb = mysql.connector.connect(
    host="localhost",
    user="admin",
    password="admin",
    database="FORM_DATA"
)

app = Flask(__name__)

@app.route("/")
def index():
    # return "<p>Hello, World!</p>"
    return render_template('form.html')

@app.route('/register', methods=["GET", "POST"])
def register():
    if request.method == 'POST':
        fullName = request.form['fullName']
        mothersName = request.form['mothersName']
        fathersName = request.form['fathersName']
        gender = request.form['gender']
        dob = request.form['dob']
        aadhar = request.form['aadhar']
        mobile = request.form['mobile']
        email = request.form['email']
        parentsMobile = request.form['parentsMobile']
        community = request.form['community']
        casteCertNum = request.form['casteCertNum']
        issueDate = request.form['issueDate']
        issueAuthority = request.form['issueAuthority']

        dob = datetime.datetime.strptime(dob, '%Y-%m-%d').date()
        issueDate = datetime.datetime.strptime(issueDate, '%Y-%m-%d').date()

        mycursor = mydb.cursor()
        sql = "insert into form (fullName,mothersName,fathersName,gender,dob,aadhar,mobile,email,parentsMobile,community,casteCertNum,issueDate,issueAuthority) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
        # val = ("{fullName}", "{mothersName}", "{fathersName}", "{gender}", "{dob}", "{aadhar}", "{mobile}", "{email}", "{parentsMobile}", "{community}", "{casteCertNum}", "{issueDate}", "{issueAuthority}")
        val = (fullName, mothersName, fathersName, gender, dob, aadhar, mobile, email, parentsMobile, community, casteCertNum, issueDate, issueAuthority)

        mycursor.execute(sql, val)
        mydb.commit()

        print(mycursor.rowcount, "Success!!")
        mycursor.close()
        return "success"

if __name__ == '__main__':
    app.run(debug=True)
