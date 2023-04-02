import { Project } from "../../types";

type PropType = {
  project: Project;
};

export function FtpProject(props: PropType) {
  const { project } = props;

  return (
    <>
      <h1>FTP Server and Client</h1>
      <h2>Motivation & context</h2>
      <p>
        This project has two applications: FTP server and FTP client. They were
        developed as academic project in the course "Computer Networking Lab" in
        Faculty of Computer Science, University of Dhaka in 2015.
      </p>
      <img src={project.poster} alt="poster" />
      <h2>Implementation</h2>
      <p>
        The project is developed with <b>Java</b>. The source code can be found{" "}
        <a
          href={project.links.find((e) => e.type === "github")?.url}
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <h2>FTP Server</h2>
      <p>
        The following features are implemented:
        <ul>
          <li>Sharing the files under a directory in server computer</li>
          <li>
            Handling multiple clients' connection requests, uploads and
            downloads
          </li>
          <li>Supports anonymous clients</li>
        </ul>
      </p>
      <h3>How to use</h3>
      <p>(1) Run the ServerMain.java. The following view will appear</p>
      <img src="http://i.imgur.com/rW0CWGV.png" />
      <p>
        (2) To start a server, input the path of the directory you want to share
        in the 'Other Settings' and click on 'Connect Server'. In the dialog,
        input 'localhost' in the 'Server Address'. Then the following will be
        the changed view
      </p>
      <br />
      <img src="http://i.imgur.com/5wpN7ck.png" />
      <p>
        (3) When a client becomes connected to the server, a message is shown in
        the 'Message Log'. Same thing goes for disconnecting.
      </p>
      <br />
      <img src="http://i.imgur.com/ytATq7u.png" />
      <p>
        (4) When a client is downloading or uploading files, those will appear
        in the 'Transfer List' section. Also a message will appear at the
        'Message Log'
      </p>
      <br />
      <img src="http://i.imgur.com/NNxtBaZ.png"></img>
      <h2>FTP Client</h2>
      <p>
        The following features are implemented:
        <ul>
          <li>Connecting to a server</li>
          <li>Upload and download files</li>
          <li>Pause and resume on the fly</li>
          <li>Browse clients' hard disk</li>
          <li>Browse Server's shared directory</li>
        </ul>
      </p>
      <h3>How to use</h3>
      <p>
        (1) Run the ClientMain.java. Click load server. Input the following and
        click ok. You will be connected to that server
      </p>
      <img src="http://i.imgur.com/HBEz62X.png" />
      <p>
        (2) You can browse your hard disk at the left side. After getting
        connected, you will be able to view the server's directory files at the
        right section.
      </p>
      <img src="http://i.imgur.com/7ZeJeT5.png" />
      <p>
        (3) To download or upload, select a folder at the bottom right or bottom
        left sections and click on the respective buttons. The downloads and
        uploads will appear at the upper-right corner
      </p>
      <img src="http://i.imgur.com/mbhsg4w.png" />
    </>
  );
}
