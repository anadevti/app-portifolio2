import {
  Card,
  Button,
  Typography,
} from "@material-tailwind/react";

function Contact() {
  return (
      <div className={"flex h-122 justify-center items-center"}>
          <Card color="transparent" shadow={false}>
              <Typography variant="h4" className={"font-roboto text-gray-300"}>
                  Personal Contact
              </Typography>
              <Typography className="mt-1 font-roboto text-gray-500">
                  Here you can see my preferable contact ways.
              </Typography>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                  <div className="mb-4 flex flex-col gap-6">
                      <Typography className="mt-1 font-roboto text-gray-300">
                          Email: gio.nacimento31@gmail.com
                      </Typography>
                      <Typography className="mt-1  font-roboto text-gray-300">
                          Tel: +55 (31) 993633746
                      </Typography>
                  </div>
                  <Button color={"orange"} className="mt-6" fullWidth
                          onClick={()=>window.open('mailto:gio.nacimento31@gmail.com')}>
                      Email me
                  </Button>
                  <a href={"https://wa.me/5531993633746"} target={"_blank"} rel="noreferrer">
                      <Button color={"purple"} className="mt-6" fullWidth>
                          WhatsApp me
                      </Button>
                  </a>
                  <Typography className="mt-4 text-center  font-roboto text-gray-500">
                      Don`t want to contact by those methods?
                      <a
                          href="#"
                          className="font-medium text-orange-500 transition-colors hover:text-purple-500 duration-500"
                      >
                          <br></br>
                          Message me on my Linkedin
                      </a>
                  </Typography>
              </form>
          </Card>
      </div>

  );
}

export default Contact;


