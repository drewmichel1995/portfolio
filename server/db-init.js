const http = require('http');

const hostname = '0.0.0.0';
const port = 5000;
Server = require('mongodb').Server;
var MongoClient = require('mongodb').MongoClient;

const PortfolioInfo = {
  name: 'PortfolioInfo',
  collections: [
    {
      name: 'profile',
      data: [
        {
          name: 'Drew Michel',
          mode: 'profile',
          age: '24',
          jobTitle: 'Full Stack Engineerzzz',
          location: 'Cookeville, TN'
        }
      ]
    },
    {
      name: 'skills',
      data: [
        {
          title: 'Front End',
          fields: [
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'HTML', icon: 'html5' },
            { name: 'CSS', icon: 'css3' },
            { name: 'React', icon: 'react' },
            { name: 'Angular', icon: 'angular_simple' },
            { name: 'JQuery', icon: 'jquery' }
          ]
        },
        {
          title: 'Back End',
          fields: [
            { name: 'Java', icon: 'java' },
            { name: 'Python', icon: 'python' },
            { name: 'C#', icon: 'windows' },
            { name: 'C++', icon: 'code_badge' },
            { name: 'Swift', icon: 'swift' },
            { name: 'NodeJS', icon: 'nodejs' }
          ]
        },
        {
          title: 'Database',
          fields: [
            { name: 'MongoDB', icon: 'mongodb' },
            { name: 'MS SQL', icon: 'msql_server' },
            { name: 'SQL Lite', icon: 'sqllite' },
            { name: 'Firebase', icon: 'firebase' },
            { name: 'MySQL', icon: 'mysql' },
            { name: 'CosmoDB', icon: 'aws' }
          ]
        },
        {
          title: 'Other',
          fields: [
            { name: 'Nginx', icon: 'nginx' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Git', icon: 'git' },
            { name: 'Bash', icon: 'terminal' },
            { name: 'Powershell', icon: 'terminal_badge' },
            { name: 'SysAdmin', icon: 'linux' }
          ]
        }
      ]
    },
    {
      name: 'experience',
      data: [
        {
          org: 'Averitt Express',
          jobtitle: 'Software Engineer',
          dates: 'January 2016 - August 2017',
          location: 'Cookeville, TN',
          description:
            "At Averitt, I primarily acted as software developer and database administrator. Averitt primarily used IBM's iSeries for their database and server. Because of this, I gained experience with understanding uncommon operating systems and certain business tools offered by IBM. The iSeries uses DB2 as its database standard, which while a bit dated, fully supports using modern SQL, which is how I primarily manipulated the database. Most programming on the iSeries was done in RPG Free and Command Line language. I also designed, developed, and maintained several SOAP web services from a Windows 2008 server. This required learning various ways to allow these operating systems to exchange data, correctly wrap the data, and then send the data off through the Windows Task Scheduler.",
          mode: 'averitt'
        },
        {
          org: 'SAIC',
          jobtitle: 'Support Technician',
          dates: 'August 2017 - June 2018',
          location: 'Cookeville, TN',
          description:
            'At SAIC, I provided assistance and problem solving solutions to the employees of the United States Environmental Protection Agency. I utilized MS Active Directory services to assess and manage user accounts. Aside from verbal troubleshooting on the phone with clients, I also used Bomgar Remote Services to remote into client computers for more in depth troubleshooting and analysis. I became familiar with many common and advanced issues among the suite of Microsoft Applications implemented by the EPA. Through my time at SAIC, I have developed the necessary communication skills to interact with clients of all technical skill levels and a the discretionary skills to be able to route issues to the appropriate department.',
          mode: 'saic'
        },
        {
          org: 'SAIC',
          jobtitle: '.NET Developer',
          dates: 'June 2018 - March 2019',
          location: 'Cookeville, TN',
          description:
            'Previously at SAIC, I worked as a .NET engineer for the USDA. During my time at the USDA, I primarily worked on modernizing and securing legacy applications. Through this modernization effort, I became savvy to building my own tools to help automate the discovery process, this includes developing C# utilities to audit applications for security risks, creating Powershell scripts to perform a full audit of Windows Servers prior to system upgrades or migrations, and automating decryption processes for access protocol upgrades.',
          mode: 'saic'
        },
        {
          org: 'SAIC',
          jobtitle: 'Full Stack Engineer',
          dates: 'March 2019 - Present',
          location: 'Cookeville, TN',
          description:
            'Currently, I am a software engineer in Cookeville, Tennessee for SAIC. My current role includes developing applications and tools for a team of model based systems engineers. Through this role, I have become confident in my ability to develop and maintain full stack containerized apps, generally utilizing a Java backend, React or Angular frontend, and an Nginx reverse proxy service. Utilizing Nginx and Docker has allowed me to streamline deployment and configuration for these applications. These applications range from reporting services to interactive tools to help our engineers visualize model based data.',
          mode: 'saic'
        }
      ]
    }
  ]
};

const server = http.createServer((req, result) => {
  result.statusCode = 200;
  result.setHeader('Content-Type', 'text/plain');
  createDB(PortfolioInfo.name);
  PortfolioInfo.collections.map(collection => {
    createCollection(PortfolioInfo.name, collection.name);
    collection.data.map(d =>
      insertData(PortfolioInfo.name, collection.name, d)
    );
  });
  result.end('Hey Sexy ;)');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function createDB(name) {
  // Connect to the db
  MongoClient.connect('mongodb://db:27017', function(err, db) {
    if (err) console.log(err);
    var dbo = db.db(name);
    db.close();
    return 'Collection created!';
  });
}

function createCollection(name, collection) {
  // Connect to the db
  MongoClient.connect(
    'mongodb://db:27017',
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err, db) => {
      if (err) console.log(err);
      var dbo = db.db(name);
      dbo.createCollection(collection, function(err, res) {
        if (err) console.log(err);
        db.close();
      });
    }
  );
  let ret = 'Collection created!';
  return ret;
}

function insertData(dataBase, collection, data) {
  // Connect to the db
  MongoClient.connect(
    'mongodb://db:27017',
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err, db) => {
      if (err) console.log(err);
      var dbo = db.db(dataBase);
      dbo.collection(collection).insertOne(data, function(err, res) {
        if (err) throw err;
        console.log('1 document inserted');
        db.close();
      });
    }
  );
  let ret = 'data inserted into ' + collection;
  return ret;
}
