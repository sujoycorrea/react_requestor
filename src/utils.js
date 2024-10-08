const baseUrl = "http://localhost:9000";

async function createContactApi(theEmail, theName, thePhone) {
  // const url = `${baseUrl}/requestApi/v1/contact`;

  const url = "http://localhost:9000/requestApi/v1/contact";

  const theBody = {
    email: theEmail,
    name: theName,
    phone: thePhone,
  };

  // debugger;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(theBody),
  };

  try {
    const rawData = await fetch(url, requestOptions);
    const theStatus = rawData.status;
    const theData = await rawData.json();

    return { status: theStatus, theData: theData };
  } catch (error) {
    console.log("FALSE - Issue with creatContactApi");
    console.log(error);
  }
}

async function createTicketApi(
  theSubject,
  theDescription,
  theContactId,
  thePriority
) {
  const url = `${baseUrl}/requestApi/v1/ticket`;

  const body = {
    subject: theSubject,
    description: theDescription,
    contactId: theContactId,
    priority: thePriority,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  try {
    const rawData = await fetch(url, requestOptions);
    const theData = await rawData.json();

    return theData;
  } catch (error) {
    console.log("FALSE - Issue with createTicketApi");
    console.log(error);
  }
}

async function getUserDetailsApi(theEmail) {
  const url = `${baseUrl}/requestApi/v1/contact/${theEmail}`;

  const requestOptions = {
    method: "GET",
  };

  try {
    const rawData = await fetch(url, requestOptions);
    console.log(rawData);
    const theData = await rawData.json();

    return theData;
  } catch (error) {
    console.log("FALSE - issue with getUserDetailsApi");
    console.log(error);
  }
}

async function getTicketsApi(contactId) {
  const url = `${baseUrl}/requestApi/v1/userTickets/${contactId}`;

  const requestOptions = {
    method: "GET",
  };

  try {
    const rawData = await fetch(url, requestOptions);
    const theData = await rawData.json();

    return theData;
  } catch (error) {
    console.log("FALSE - issue w/ getTicketsApi func");
    console.log(error);
  }
}

async function getTicketDetailsApi(ticketNum) {
  const url = `${baseUrl}/requestApi/v1/ticket/${ticketNum}`;

  const requestOptions = {
    method: "GET",
  };

  try {
    const rawData = await fetch(url, requestOptions);
    const theData = await rawData.json();

    return theData;
  } catch (error) {
    console.log("FALSE - Issue with getTicketDetails");
    console.log(error);
  }
}

export {
  createContactApi,
  createTicketApi,
  getUserDetailsApi,
  getTicketsApi,
  getTicketDetailsApi,
};
