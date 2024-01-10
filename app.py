from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


@app.route("/")
def index():
    # return "<p>Hello, World!</p>"
    return render_template('form.html')

@app.route('/register', methods=['POST'])
def register():
    name = request.form['name']
    dob = request.form['dob']
    mobile = request.form['mobile']
    address = request.form['address']
    education = request.form['education']
    branch = request.form['branch']

    # You can perform validation and store the data in a database here
    
    return f"Registration Successful!<br>Name: {name}<br>DOB: {dob}<br>Mobile: {mobile}<br>Address: {address}<br>Education: {education}<br>Branch: {branch}"

if __name__ == '__main__':
    app.run(debug=True)
