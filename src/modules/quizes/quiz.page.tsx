import PyCodeEditor from "../../shared/elements/py-code-editor";
import CodingQuestion from "./coding-question.component";
import OpenendedQuestion from "./openended-question.component";
import RepairTheCodeQuestion from "./repair-the-code-question.component";
import TrueOrFalseQuestion from "./ture-or-false-question.component";

export default function QuizPage() {
  return (
    <div className="container mx-auto my-5 p-5 bg-slate-50 shadow">
      <h1 className="h1">Python</h1>
      <p className="mb-5">Lee atentamente cada pregunta antes de contestar.</p>
      <div className="grid gap-10">
        <section className="grid gap-5">
          <h2 className="h2">Verdadero o falso</h2>
          <TrueOrFalseQuestion>
            <code className="code">True</code> es igual a{" "}
            <code className="code">0</code>
          </TrueOrFalseQuestion>

          <TrueOrFalseQuestion>
            <code className="code">input()</code> es igual a{" "}
            <code className="code">input ()</code>
          </TrueOrFalseQuestion>

          <TrueOrFalseQuestion>
            <code className="code">"1"</code> es distinto a{" "}
            <code className="code">1</code>
          </TrueOrFalseQuestion>

          <TrueOrFalseQuestion>
            El termino <code className="code">float</code> es utilizado para
            referirse a variables de número entero
          </TrueOrFalseQuestion>

          <TrueOrFalseQuestion>
            Puede utilizarse un <code className="code">if</code> sin{" "}
            <code className="code">elif</code> pero no un{" "}
            <code className="code">elif</code> sin un{" "}
            <code className="code">if</code>
          </TrueOrFalseQuestion>

          <TrueOrFalseQuestion>
            <i>python</i>, <i>javascript</i> y <i>html</i> son lenguajes de
            programación
          </TrueOrFalseQuestion>

          <TrueOrFalseQuestion>
            <i>java</i> es la forma resumida con la cual nos referimos a{" "}
            <i>javascript</i>
          </TrueOrFalseQuestion>

          <TrueOrFalseQuestion>
            Los lenguajes mas populares del <i>back-end</i> son <i>html</i>,{" "}
            <i>css</i> y <i>javascript</i>
          </TrueOrFalseQuestion>

          <TrueOrFalseQuestion>
            <i>javascript</i> se puede utilizar tanto en <i>back-end</i> como en{" "}
            <i>front-end</i>
          </TrueOrFalseQuestion>

          <TrueOrFalseQuestion>
            En <i>python</i> <code className="code">if</code> es una función al
            igual que <code className="code">int</code> o{" "}
            <code className="code">str</code>
          </TrueOrFalseQuestion>
        </section>
        <section className="grid gap-5">
          <h2 className="h2">Encuentre el valor</h2>
          <OpenendedQuestion>
            <p>
              ¿Cual es el valor de <code className="code">c</code>?
            </p>
            <PyCodeEditor
              defaultValue={`a = 1
b = 2
c = a//b
if c:
  c += 1
else:
  c -= 1`}
              readOnly={true}
            />
          </OpenendedQuestion>
          <OpenendedQuestion>
            <p>
              ¿Cual es el valor de <code className="code">c</code>?
            </p>
            <PyCodeEditor
              defaultValue={`a = 2
b = 3
c = a ** c + a
if c > b ** b:
  c %=2
if c >= 0:
  c -= 2
else:
  c += b`}
              readOnly={true}
            />
          </OpenendedQuestion>
          <OpenendedQuestion>
            <p>
              ¿Cual es el valor de <code className="code">c</code>?
            </p>
            <PyCodeEditor
              defaultValue={`a = 1
b = 2
c = a + b
c += c
if c >= 6:
  if c <= 6:
    c = 5
  else:
    c = 4
else:
  c = 6`}
              readOnly={true}
            />
          </OpenendedQuestion>
          <OpenendedQuestion>
            <p>
              ¿Cual es el valor de <code className="code">c</code>?
            </p>
            <PyCodeEditor
              defaultValue={`a = 0
b = True
c = a and c
if not c:
  c = True
elif a == (c + 1):
  c = 2
else:
  c -= 3`}
              readOnly={true}
            />
          </OpenendedQuestion>
          <OpenendedQuestion>
            <p>
              ¿Cual es el valor de <code className="code">c</code>?
            </p>
            <PyCodeEditor
              defaultValue={`a = True % 3
b = 3 ** (not True)
if a == b:
  c = a
elif a > b:
  c = b
else:
  c = a + b`}
              readOnly={true}
            />
          </OpenendedQuestion>
        </section>
        <section className="grid gap-5">
          <h2 className="h2">Repare el código</h2>
          <RepairTheCodeQuestion
            defaultValue={`input("ingrese su nombre")
print("bienvenido " + nombre)`}
          />
          <RepairTheCodeQuestion
            defaultValue={`username = input("username: ")
password = input("password: ")
if username == "admin" and password == 123456:
    print("ha accedido con éxito")`}
          />
          <RepairTheCodeQuestion
            defaultValue={`edad = 18
if edad < 18:
    print("menor de edad")
elif edad < 65:
    print("mayor de edad")
else edad > 65:
    print("anciano")`}
          />
          <RepairTheCodeQuestion
            defaultValue={`edad = input("ingrese su edad: ")
if edad > 18:
    print("es mayor a 18")
else:
  print("es menor a 18")
  print("le faltan " + 18 - edad + " años para cumplir los 18")`}
          />
          <RepairTheCodeQuestion
            defaultValue={`color == input(ingrese su color favorito:)
if color = azul
  print(su color favorito es azul)
  else("su color favorito no es azul")`}
          />
        </section>
        <section className="grid gap-5">
          <h2 className="h2">Desarrollo</h2>
          <CodingQuestion>
            <p>
              Cree un programa que solicite dos numeros al usuario y luego
              muestre el resultado de su suma, resta, multiplicación y división.
              Si el segundo numero es 0 la división debe decir "No es posible
              dividir ambos números"
            </p>
          </CodingQuestion>
          <CodingQuestion>
            <p>Realize las siguientes preguntas al usuario: </p>
            <ul className="pl-5">
              <li>¿Cuantas ruedas tiene?</li>
              <li>¿De que color es?</li>
            </ul>
            <p>
              Una vez realizada la pregunta deberá indicarle a que tipo de
              vehículo se refiere y cual es su color. Los tipos de vehículos
              son:
            </p>
            <ul className="pl-5">
              <li>0 o menos ruedas: Desconocido</li>
              <li>1 rueda: Monociclo</li>
              <li>2 ruedas: Bicicleta</li>
              <li>3 ruedas: Triciclo</li>
              <li>4 o mas ruedas: Desconocido</li>
            </ul>
            <i className="text-sm">
              * Tenga en cuenta que en la primera pregunta el usuario podrá
              ingresar cualquier número (incluso negativos)
            </i>
          </CodingQuestion>
          <CodingQuestion>
            <p>
              Ha salido con tres amigos de fiesta y todos pidieron distintas
              cosas para comer. Debe hacer un programa que consulte el nombre y
              deuda de cada uno (no olvide considerarse a usted mismo), y luego
              pregunte como desean dividir la cuenta; a partes iguales o que
              cada uno pague lo que consumió. Finalmente, debe mostrar el total
              en pantalla y alado de cada nombre el valor que debe pagar.
            </p>
          </CodingQuestion>
        </section>
      </div>
    </div>
  );
}
