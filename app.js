// Encapsula todo el código en una IIFE para evitar variables globales
(function () {
    // --- INICIO BLOQUE UNIFICADO ---
    // PRODUCTOS
    const productosSeccion = [
        { id: 1, nombre: "Hamburguesa", descripcion: "Clásica: con queso, lechuga y tomate + papas fritas.", precio: "6000", imagen: "https://previews.123rf.com/images/igordutina/igordutina1206/igordutina120600042/14185520-hamburguesa-cl%C3%A1sica-con-tomate-lechuga-y-papas-fritas-franc%C3%A9s.jpg" },
        { id: 2, nombre: "Hamburguesa", descripcion: "Doble carne: cheddar, panceta y huevo.", precio: "7000", imagen: "https://img.freepik.com/fotos-premium/hamburguesa-doble-carne-vacuno-jaspeada-tocino-queso-cheddar-huevo-frito-yema-huevo-tomates-cebollas-salsa-crema-ketchup-mesa-madera-fondo-amarillo-cerrar_357114-618.jpg?w=740" },
        { id: 3, nombre: "Hamburguesa", descripcion: "Burguer Bluecheese: Doble medallón de carne, mayonesa casera, lechuga, tomate, cebolla salteada, queso roquefort y provolone", precio: "8500", imagen: "https://www.wellplated.com/wp-content/uploads/2013/09/Black-Bean-Beef-Burgers.jpg" },
        { id: 4, nombre: "Pizza", descripcion: "Muzzarella clásica: Masa de trigo, salsa de tomate,aceite de oliva, orégano y albahaca.", precio: "7000", imagen: "https://locosxlaparrilla.com/wp-content/uploads/2015/02/Receta-recetas-locos-x-la-parrilla-locosxlaparrilla-receta-pizza-pizza-receta-pizza-mozzarella-pizza-mozzarella.jpg" },
        { id: 5, nombre: "Pizza", descripcion: "Pizza napolitana: Tomate, mozzarella, hojas de albahaca fresca y aceite de oliva", precio: "8000", imagen: "https://www.paulinacocina.net/wp-content/uploads/2023/03/pizza-casera.jpg.webp" },
        { id: 6, nombre: "Pizza", descripcion: "Fugazzeta rellena: Harina, agua, levadura, sal, aceite - mozzarella, jamón (opcional) - cebolla, orégano, sal, pimienta, aceite..", precio: "9000", imagen: "https://www.comemelapizza.com/wp-content/uploads/2015/03/Pizza-fugazzeta-rellena-1-7-845x321.jpg" },
        { id: 7, nombre: "Ensaladas", descripcion: "Ensalada mixta: Lechuga, tomate, cebolla — limón, cilantro, aceite, sal, pimienta.", precio: "6500", imagen: "https://www.laylita.com/recetas/wp-content/uploads/Ensalada-de-lechuga-con-limon-y-cilantro.jpg" },
        { id: 8, nombre: "Ensaladas", descripcion: "Ensalada de rucula: Rúcula, tomate cherry, parmesano — limón, aceite de oliva, sal, pimienta.", precio: "5000", imagen: "https://www.hogarmania.com/archivos/201606/5800-2-ensalada-de-rucula-cherrys-y-queso-xl-848x477x80xX.jpg" },
        { id: 9, nombre: "Ensaladas", descripcion: "Ensalada rusa: Papa, zanahoria, arvejas - mayonesa, sal, pimienta", precio: "7000", imagen: "https://www.recetasnestle.cl/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/20e18e0187c756b853b2330c953fb6eb.webp?itok=AL5ulLr8" },
        { id: 10, nombre: "Bebidas", descripcion: "Gin Tonic:  Gin + agua tónica + hielo + rodaja de lima o limón.", precio: "6500", imagen: "https://www.paulinacocina.net/wp-content/uploads/2022/05/gin-tonic-receta.jpg.webp" },
        { id: 11, nombre: "Bebidas", descripcion: "Piña colada: Ron + crema de coco + jugo de piña + hielo", precio: "8000", imagen: "https://cdn-ilddihb.nitrocdn.com/MgqZCGPEMHvMRLsisMUCAIMWvgGMxqaj/assets/images/optimized/rev-6b9d936/www.goya.com/wp-content/uploads/2023/10/pina-colada.png" },
        { id: 12, nombre: "Bebidas", descripcion: "Daiquiri: Ron blanco + jugo de lima + azúcar. ", precio: "14000", imagen: "https://cuberspremium.com/wp-content/uploads/2017/06/daiquiri-clasico.jpg" },
        { id: 13, nombre: "Postres", descripcion: "Flan: Huevos + leche + azúcar + vainilla + caramelo", precio: "5000", imagen: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/32121D5E-D3DF-4FD9-BE6E-7EB53562A1DE/Derivates/02DCA6F3-23D3-4F25-92B2-EAEF2A6606F3.jpg" },
        { id: 14, nombre: "Postres", descripcion: "Helado: Leche + crema + azúcar + sabor (vainilla, chocolate, fruta, etc.) + frío", precio: "4500", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ice_Cream_dessert_02.jpg/410px-Ice_Cream_dessert_02.jpg" },
        { id: 15, nombre: "Postres", descripcion: "Brownie: Chocolate + mantequilla + azúcar + huevos + harina + nueces (opcional)", precio: "4000", imagen: "https://mividaenundulce.com/wp-content/uploads/2018/05/dsc_0956.jpg" },
        { id: 16, nombre: "Lomitos", descripcion: "Lomito Completo: Pan + lomo de res + lechuga + tomate + jamón + queso + huevo + mayonesa (y salsas al gusto) ", precio: "9500", imagen: "https://www.clarin.com/img/2021/07/26/u-aUfp64d_1256x620__1.jpg" },
        { id: 17, nombre: "Lomitos", descripcion: "lomito de Pollo: Pan + pechuga de pollo + lechuga + tomate + jamón + queso + huevo + mayonesa (y salsas al gusto", precio: "11000", imagen: "https://betos.com.ar/wp-content/uploads/2019/08/betos-pollo.png" },
        { id: 18, nombre: "Lomitos", descripcion: "Vaggie: Sartén + medallón vegetal (soja, lentejas, garbanzos, etc.) + lechuga + tomate + queso + huevo (opcional) + mayonesa o aderezo vegano", precio: "8500", imagen: "https://betos.com.ar/wp-content/uploads/2019/08/betos-pollo.png" }
    ];

    // Modularización de lógica de productos y carrito

    const ProductosAPI = {
        cargarProductos: () => productosSeccion,
        filtrar: (categoria) => {
            if (categoria === 'todos') return productosSeccion;
            return productosSeccion.filter(item => item.nombre === categoria);
        }
    };

    const CarritoManager = {
        agregarProducto: (producto) => {
            const existente = carrito.find(p => p.id === producto.id);
            if (existente) {
                existente.cantidad += 1;
            } else {
                carrito.push({ id: producto.id, nombre: producto.descripcion.split(':')[0], precio: parseInt(producto.precio), cantidad: 1 });
            }
            CarritoManager.actualizarUI();
            animarCarritoIcono();
            mostrarToast('¡Producto agregado al carrito!');
        },
        actualizarUI: () => {
            actualizarCarritoUI();
        }
    };

    // UI
    function mostrarToast(mensaje) {
        let toast = document.getElementById('toast-msg');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast-msg';
            toast.style.position = 'fixed';
            toast.style.bottom = '32px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
            toast.style.background = 'linear-gradient(90deg,#43e97b 0%,#38f9d7 100%)';
            toast.style.color = '#fff';
            toast.style.padding = '1rem 2.2rem';
            toast.style.borderRadius = '12px';
            toast.style.fontSize = '1.15rem';
            toast.style.boxShadow = '0 4px 16px #43e97b40';
            toast.style.zIndex = '9999';
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.4s';
            document.body.appendChild(toast);
        }
        toast.textContent = mensaje;
        toast.style.opacity = '1';
        setTimeout(() => {
            toast.style.opacity = '0';
        }, 1800);
    }

    function animarScrollAparicion() {
        const elementos = document.querySelectorAll('.aparecer-scroll');
        const trigger = window.innerHeight * 0.92;
        elementos.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < trigger) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    }

    // PEDIDOS
    function mostrarFormularioPedido(producto) {
        document.getElementById('hacer-pedido').classList.remove('oculto');
        document.getElementById('ver-pedido').classList.add('oculto');
        document.getElementById('pedido-producto').value = producto.descripcion.split(':')[0];
        // Si el usuario ya seleccionó una cantidad, mantenerla
        const cantidadInput = document.getElementById('pedido-cantidad');
        if (cantidadInput.value && parseInt(cantidadInput.value) > 0) {
            // Mantener la cantidad seleccionada
        } else {
            cantidadInput.value = 1;
        }
        document.getElementById('pedido-nombre').value = '';
        document.getElementById('pedido-telefono').value = '';
        document.getElementById('pedido-direccion').value = '';
        document.getElementById('pedido-tarjeta').value = '';
        document.getElementById('hacer-pedido').scrollIntoView({ behavior: 'smooth' });
    }

    function inicializarPedidos() {
        // Cancelar pedido
        const cancelarPedidoBtn = document.getElementById('cancelar-pedido');
        if (cancelarPedidoBtn) {
            cancelarPedidoBtn.onclick = () => {
                document.getElementById('hacer-pedido').classList.add('oculto');
            };
        }
        // Enviar pedido y mostrar resumen
        const formHacerPedido = document.getElementById('form-hacer-pedido');
        if (formHacerPedido) {
            formHacerPedido.onsubmit = function (e) {
                e.preventDefault();
                const nombre = document.getElementById('pedido-nombre').value;
                const telefono = document.getElementById('pedido-telefono').value;
                const direccion = document.getElementById('pedido-direccion').value;
                const tarjeta = document.getElementById('pedido-tarjeta').value;
                const detalle = document.getElementById('ver-pedido-detalle');
                let resumenHTML = '';
                let total = 0;
                // Solo pedido individual
                const producto = document.getElementById('pedido-producto').value;
                const cantidad = document.getElementById('pedido-cantidad').value;
                const prodObj = productosSeccion.find(item => item.descripcion.split(':')[0].trim() === producto);
                total = prodObj ? parseInt(prodObj.precio) * parseInt(cantidad) : 0;
                resumenHTML = `
                <div class="factura-datos">
                    <div><span>Producto:</span> <strong>${producto}</strong></div>
                    <div><span>Cantidad:</span> <strong>${cantidad}</strong></div>
                    <div><span>Nombre:</span> <strong>${nombre}</strong></div>
                    <div><span>Teléfono:</span> <strong>${telefono}</strong></div>
                    <div><span>Dirección:</span> <strong>${direccion}</strong></div>
                    <div><span>Tarjeta:</span> <strong>${tarjeta ? tarjeta : 'No ingresada'}</strong></div>
                    <div class="factura-total"><span>Total:</span> <strong>$${total}</strong></div>
                </div>
                <div class="factura-gracias">¡Gracias por tu pedido!</div>
            `;
                document.getElementById('pedido-cantidad').style.display = '';
                document.getElementById('pedido-producto').readOnly = false;
                detalle.innerHTML = resumenHTML;
                document.getElementById('hacer-pedido').classList.add('oculto');
                document.getElementById('ver-pedido').classList.remove('oculto');
                document.getElementById('ver-pedido').scrollIntoView({ behavior: 'smooth' });
                mostrarToast('¡Pedido realizado con éxito!');
            };
        }
        // Cerrar resumen de pedido
        const cerrarVerPedidoBtn = document.getElementById('cerrar-ver-pedido');
        if (cerrarVerPedidoBtn) {
            cerrarVerPedidoBtn.onclick = () => {
                document.getElementById('ver-pedido').classList.add('oculto');
            };
        }
        document.getElementById('pedido-cerrar-btn').innerHTML = '<i class="fas fa-times"></i> Cerrar';
    }

    document.addEventListener('DOMContentLoaded', () => {
        animarScrollAparicion();
        window.addEventListener('scroll', animarScrollAparicion);

        const productosBtns = document.querySelectorAll('.categoria-btn');
        const productosLista = document.getElementById('productos-lista');
        if (productosBtns.length && productosLista) {
            productosBtns.forEach(btn => {
                btn.addEventListener('click', function () {
                    productosBtns.forEach(b => b.classList.remove('activo'));
                    this.classList.add('activo');
                    mostrarProductosCategoria(this.getAttribute('data-categoria'));
                });
            });
            mostrarProductosCategoria('todos');
        }

        if (productosLista) {
            productosLista.addEventListener('click', function (e) {
                if (e.target.classList.contains('producto-pedir-btn')) {
                    const div = e.target.closest('.producto-card');
                    const titulo = div.querySelector('h3').textContent.trim();
                    const producto = productosSeccion.find(item => item.descripcion.split(':')[0].trim() === titulo);
                    if (producto) mostrarFormularioPedido(producto);
                }
            });
        }

        inicializarPedidos();

        // Ocultar loader al cargar
        const loader = document.getElementById('loader-bg');
        setTimeout(() => {
            loader.classList.add('oculto');
            setTimeout(() => loader.style.display = 'none', 700);
        }, 1200);

        inicializarSliderOfertas();

        // Botón cerrar del modal de pedido (asegura que siempre funcione)
        function cerrarModalPedido() {
            const modal = document.getElementById('pedido-modal');
            if (modal) {
                modal.classList.add('oculto');
                modal.style.display = '';
                const form = document.getElementById('pedido-form');
                if (form) form.style.display = '';
                const resumen = document.getElementById('pedido-resumen');
                if (resumen) resumen.classList.add('oculto');
            }
            // También cerrar el modal de resumen si está abierto
            const verPedido = document.getElementById('ver-pedido');
            if (verPedido && !verPedido.classList.contains('oculto')) {
                verPedido.classList.add('oculto');
            }
        }
        // Delegación de eventos para asegurar funcionamiento siempre
        document.body.addEventListener('click', function (e) {
            if (e.target && (e.target.id === 'pedido-cerrar-btn' || e.target.id === 'pedido-modal-close')) {
                cerrarModalPedido();
            }
        });
        // También cierra el modal si se hace click fuera del contenido
        const modal = document.getElementById('pedido-modal');
        if (modal) {
            modal.addEventListener('click', function (e) {
                if (e.target === modal) cerrarModalPedido();
            });
        }

        // Asignar evento a la X para cerrar el carrito
        const cerrarXCarrito = document.getElementById('carrito-x-cerrar');
        if (cerrarXCarrito) {
            cerrarXCarrito.onclick = function () {
                document.getElementById('carrito-panel').classList.add('oculto');
            };
        }

        // Botón cerrar para todos los modales de pedido
        document.body.addEventListener('click', function (e) {
            // Cerrar modal de pedido individual y modal de carrito
            if (e.target && e.target.id === 'pedido-cerrar-btn') {
                // Cierra el formulario de pedido individual
                const hacerPedido = document.getElementById('hacer-pedido');
                if (hacerPedido) hacerPedido.classList.add('oculto');
                // Cierra el modal de carrito si está abierto
                const pedidoModal = document.getElementById('pedido-modal');
                if (pedidoModal) {
                    pedidoModal.classList.add('oculto');
                    pedidoModal.style.display = '';
                    const pedidoForm = document.getElementById('pedido-form');
                    if (pedidoForm) pedidoForm.style.display = '';
                    const pedidoResumen = document.getElementById('pedido-resumen');
                    if (pedidoResumen) pedidoResumen.classList.add('oculto');
                }
            }
            // Cerrar modal de resumen de pedido
            if (e.target && e.target.id === 'cerrar-ver-pedido') {
                const verPedido = document.getElementById('ver-pedido');
                if (verPedido) verPedido.classList.add('oculto');
            }
        });

        // Asegurar que la X del carrito siempre cierra el panel
        function asignarCerrarXCarrito() {
            var cerrarX = document.getElementById('carrito-x-cerrar');
            if (cerrarX) {
                cerrarX.onclick = function () {
                    var panel = document.getElementById('carrito-panel');
                    if (panel) panel.classList.add('oculto');
                };
            }
        }
        asignarCerrarXCarrito();
        // Si el carrito se actualiza dinámicamente, vuelve a asignar el evento
        const observer = new MutationObserver(asignarCerrarXCarrito);
        const panel = document.getElementById('carrito-panel');
        if (panel) {
            observer.observe(panel, { childList: true, subtree: true });
        }

        // Búsqueda en tiempo real
        const buscador = document.getElementById('buscador');
        if (buscador) {
            buscador.addEventListener('input', function (e) {
                const termino = e.target.value.toLowerCase();
                filtrarProductos(p => p.nombre.toLowerCase().includes(termino));
            });
        }
    });

    // Validación en tiempo real para campos de teléfono
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('input[type="tel"]').forEach(input => {
            input.addEventListener('input', function (e) {
                this.value = this.value.replace(/[^\d+]/g, '');
            });
        });
    });

    function mostrarProductosCategoria(categoria) {
        const productosLista = document.getElementById('productos-lista');
        productosLista.innerHTML = '';
        productosLista.setAttribute('aria-live', 'polite'); // Accesibilidad
        let filtrados = ProductosAPI.filtrar(categoria);
        if (filtrados.length === 0) {
            // Mensaje seguro usando createElement
            const p = document.createElement('p');
            p.style.textAlign = 'center';
            p.style.color = '#888';
            p.style.fontSize = '1.2rem';
            p.textContent = 'No hay productos en esta categoría.';
            productosLista.appendChild(p);
            return;
        }
        filtrados.forEach((item, idx) => {
            const div = document.createElement('div');
            div.className = 'producto-card';
            // Validación robusta de descripción
            let titulo = 'Producto';
            let detalle = '';
            if (typeof item.descripcion === 'string') {
                const partes = item.descripcion.split(':');
                titulo = partes[0] ? partes[0] : 'Producto';
                detalle = partes[1] ? partes[1].trim() : '';
            }
            // ...crear y agregar elementos usando titulo y detalle...
            const img = document.createElement('img');
            img.src = item.imagen;
            img.alt = titulo;
            img.className = 'menu-img';
            img.loading = 'lazy';
            div.appendChild(img);

            const h3 = document.createElement('h3');
            h3.textContent = titulo;
            div.appendChild(h3);

            const pDetalle = document.createElement('p');
            pDetalle.className = 'producto-detalle';
            pDetalle.textContent = detalle;
            div.appendChild(pDetalle);

            const spanPrecio = document.createElement('span');
            spanPrecio.className = 'producto-precio';
            spanPrecio.textContent = `$${item.precio}`;
            div.appendChild(spanPrecio);

            const btnAnadir = document.createElement('button');
            btnAnadir.className = 'producto-anadir-btn';
            btnAnadir.setAttribute('data-id', item.id);
            // Ícono decorativo
            const iconoAdd = document.createElement('i');
            iconoAdd.className = 'fas fa-plus-circle';
            iconoAdd.setAttribute('aria-hidden', 'true');
            btnAnadir.appendChild(iconoAdd);
            // Texto accesible
            const spanAdd = document.createElement('span');
            spanAdd.className = 'visually-hidden';
            spanAdd.textContent = 'Añadir ';
            btnAnadir.appendChild(spanAdd);
            btnAnadir.appendChild(document.createTextNode(titulo));
            div.appendChild(btnAnadir);

            const aWhatsapp = document.createElement('a');
            aWhatsapp.className = 'producto-whatsapp-btn';
            aWhatsapp.href = `https://wa.me/5493544637516?text=Hola%2C%20quiero%20pedir%20una%20${encodeURIComponent(titulo)}`;
            aWhatsapp.target = '_blank';
            aWhatsapp.rel = 'noopener';
            aWhatsapp.style.display = 'inline-block';
            aWhatsapp.style.marginTop = '0.7rem';
            aWhatsapp.style.background = '#25d366';
            aWhatsapp.style.color = '#fff';
            aWhatsapp.style.padding = '0.7rem 1.2rem';
            aWhatsapp.style.borderRadius = '8px';
            aWhatsapp.style.fontWeight = 'bold';
            aWhatsapp.style.textDecoration = 'none';
            aWhatsapp.style.fontFamily = "'Roboto',Arial,sans-serif";
            aWhatsapp.style.boxShadow = '0 2px 8px #25d36640';
            aWhatsapp.style.transition = 'background 0.2s';
            // Ícono decorativo
            const iconoWA = document.createElement('i');
            iconoWA.className = 'fab fa-whatsapp';
            iconoWA.setAttribute('aria-hidden', 'true');
            aWhatsapp.appendChild(iconoWA);
            // Texto accesible
            const spanWA = document.createElement('span');
            spanWA.className = 'visually-hidden';
            spanWA.textContent = 'Pedir por WhatsApp ';
            aWhatsapp.appendChild(spanWA);
            aWhatsapp.appendChild(document.createTextNode('Pedir por WhatsApp'));
            div.appendChild(aWhatsapp);

            productosLista.appendChild(div);
            setTimeout(() => {
                div.classList.add('mostrar');
            }, 60 * idx);
        });
    }

    function inicializarSliderOfertas() {
        const slider = document.querySelector('.slider-ofertas .slider-wrapper');
        if (!slider) return;
        const slides = slider.querySelectorAll('.slide');
        const btnPrev = slider.querySelector('.slider-btn.prev');
        const btnNext = slider.querySelector('.slider-btn.next');
        let current = 0;
        let intervalId = null;

        function mostrarSlide(idx) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === idx);
            });
        }

        function siguienteSlide() {
            current = (current + 1) % slides.length;
            mostrarSlide(current);
        }

        function anteriorSlide() {
            current = (current - 1 + slides.length) % slides.length;
            mostrarSlide(current);
        }

        if (btnNext) btnNext.onclick = () => {
            siguienteSlide();
            reiniciarIntervalo();
        };
        if (btnPrev) btnPrev.onclick = () => {
            anteriorSlide();
            reiniciarIntervalo();
        };

        function reiniciarIntervalo() {
            if (intervalId) clearInterval(intervalId);
            intervalId = setInterval(siguienteSlide, 4000);
        }

        reiniciarIntervalo();
    }

    // --- Carrito ---
    let carrito = [];

    // Utilidad para formatear precios
    function formatearPrecio(valor) {
        return `$${valor.toLocaleString('es-AR')}`;
    }

    function animarCarritoIcono() {
        const icono = document.getElementById('carrito-btn');
        if (icono) {
            icono.classList.remove('carrito-animar');
            // Forzar reflow para reiniciar animación
            void icono.offsetWidth;
            icono.classList.add('carrito-animar');
        }
    }

    function actualizarCarritoUI() {
        const panel = document.getElementById('carrito-panel');
        const lista = document.getElementById('carrito-lista');
        // Mejora de accesibilidad: aria-live
        lista.setAttribute('aria-live', 'polite');
        const total = document.getElementById('carrito-total');
        const cantidad = document.getElementById('carrito-cantidad');
        const btnPagar = document.getElementById('carrito-pagar');
        lista.innerHTML = '';
        let suma = 0;
        carrito.forEach((item, idx) => {
            suma += item.precio * item.cantidad;
            // Evita innerHTML, usa createElement y appendChild
            const div = document.createElement('div');
            div.className = 'carrito-item';
            const spanNombre = document.createElement('span');
            // Ícono decorativo con aria-hidden y texto accesible
            const icono = document.createElement('i');
            icono.className = 'fas fa-utensils';
            icono.setAttribute('aria-hidden', 'true');
            spanNombre.appendChild(icono);
            const texto = document.createElement('span');
            texto.className = 'visually-hidden';
            texto.textContent = 'Producto: ';
            spanNombre.appendChild(texto);
            // Nombre visible
            spanNombre.appendChild(document.createTextNode(item.nombre));
            // Input para modificar cantidad
            const inputCantidad = document.createElement('input');
            inputCantidad.type = 'number';
            inputCantidad.min = '1';
            inputCantidad.value = item.cantidad;
            inputCantidad.style.width = '48px';
            inputCantidad.style.margin = '0 8px';
            inputCantidad.setAttribute('aria-label', 'Modificar cantidad');
            inputCantidad.onchange = function () {
                const nuevaCantidad = parseInt(this.value);
                if (nuevaCantidad > 0) {
                    carrito[idx].cantidad = nuevaCantidad;
                    actualizarCarritoUI();
                }
            };
            const spanPrecio = document.createElement('span');
            spanPrecio.textContent = formatearPrecio(item.precio * item.cantidad);
            const btnEliminar = document.createElement('button');
            btnEliminar.className = 'carrito-eliminar';
            btnEliminar.setAttribute('data-idx', idx);
            btnEliminar.title = 'Eliminar';
            btnEliminar.onclick = function () {
                carrito.splice(parseInt(this.dataset.idx), 1);
                actualizarCarritoUI();
            };
            div.appendChild(spanNombre);
            div.appendChild(inputCantidad);
            div.appendChild(spanPrecio);
            div.appendChild(btnEliminar);
            lista.appendChild(div);
        });
        // Botón para eliminar todo el carrito
        let btnVaciar = document.getElementById('carrito-vaciar');
        if (!btnVaciar) {
            btnVaciar = document.createElement('button');
            btnVaciar.id = 'carrito-vaciar';
            btnVaciar.textContent = 'Vaciar carrito';
            btnVaciar.className = 'cancelar-pedido-btn';
            btnVaciar.style.marginTop = '0.5rem';
            btnVaciar.onclick = function () {
                if (carrito.length === 0) return;
                if (confirm('¿Estás seguro de que deseas eliminar todos los productos del carrito?')) {
                    carrito.length = 0;
                    actualizarCarritoUI();
                }
            };
            panel.appendChild(btnVaciar);
        }
        btnVaciar.style.display = carrito.length ? '' : 'none';
        total.textContent = carrito.length ? `Total: ${formatearPrecio(suma)}` : '';
        cantidad.textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
        btnPagar.style.display = carrito.length ? '' : 'none';
        // Eliminar producto
        lista.querySelectorAll('.carrito-eliminar').forEach(btn => {
            btn.onclick = function () {
                carrito.splice(parseInt(this.dataset.idx), 1);
                actualizarCarritoUI();
            };
        });

        // --- SOLUCIÓN: Botón X y basura ---
        // Elimino el botón X de cerrar del carrito
        // Eliminar botón X duplicado si existe más de uno
        let cerrarXBtns = panel.querySelectorAll('#carrito-x-cerrar');
        if (cerrarXBtns.length > 1) {
            for (let i = 1; i < cerrarXBtns.length; i++) {
                cerrarXBtns[i].remove();
            }
        }
        // Elimino la creación y asignación del botón con id 'carrito-x-cerrar'
        // --- FIN SOLUCIÓN ---
        // agregarSwitchSonido();

        // Si el carrito queda vacío, mostrar mensaje y ocultar solo botones de acción
        if (carrito.length === 0) {
            lista.innerHTML = '<div style="text-align:center;color:#888;padding:1.5rem 0;">El carrito está vacío.</div>';
            total.textContent = '';
            btnPagar.style.display = 'none';
            cantidad.textContent = '0';
            let btnVaciar = document.getElementById('carrito-vaciar');
            if (btnVaciar) btnVaciar.style.display = 'none';
            // El botón cerrar debe seguir visible y el panel NO debe ocultarse
            let btnCerrar = document.getElementById('carrito-cerrar');
            if (btnCerrar) btnCerrar.style.display = '';
            // NO ocultar el panel aquí
            // OCULTAR el panel si está vacío (arreglo solicitado)
            let panel = document.getElementById('carrito-panel');
            if (panel) panel.classList.add('oculto');
        }

        // Asegurar que el botón 'Cerrar' siempre esté presente
        let btnCerrar = document.getElementById('carrito-cerrar');
        if (!btnCerrar) {
            btnCerrar = document.createElement('button');
            btnCerrar.id = 'carrito-cerrar';
            btnCerrar.className = 'cancelar-pedido-btn';
            btnCerrar.tabIndex = 0;
            btnCerrar.setAttribute('aria-label', 'Cerrar carrito');
            btnCerrar.textContent = 'Cerrar';
            btnCerrar.onclick = function () {
                panel.classList.add('oculto');
            };
            panel.appendChild(btnCerrar);
        } else {
            // Si ya existe, asegúrate de que esté visible
            btnCerrar.style.display = '';
        }
        asignarCerrarXCarrito();
    }

    document.addEventListener('click', function (e) {
        // Añadir al carrito
        if (e.target.closest('.producto-anadir-btn')) {
            const id = parseInt(e.target.closest('.producto-anadir-btn').dataset.id);
            const prod = productosSeccion.find(p => p.id === id);
            if (!prod) return;
            CarritoManager.agregarProducto(prod);
        }
        // Abrir carrito
        if (e.target.id === 'carrito-btn' || e.target.closest('#carrito-btn')) {
            document.getElementById('carrito-panel').classList.remove('oculto');
        }
        // Cerrar carrito
        if (e.target.id === 'carrito-cerrar') {
            document.getElementById('carrito-panel').classList.add('oculto');
        }
        // Pagar
        if (e.target.id === 'carrito-pagar') {
            document.getElementById('carrito-panel').classList.add('oculto');
            mostrarFormularioPagoCarrito();
        }
    });

    function mostrarFormularioPagoCarrito() {
        // Llena el formulario de pedido con los datos del carrito
        document.getElementById('pedido-modal').classList.remove('oculto');
        document.getElementById('pedido-modal').style.display = 'flex';
        document.getElementById('pedido-form').reset();
        document.getElementById('cantidad').parentElement.style.display = 'none';
        document.getElementById('nombre').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('direccion').value = '';
        document.getElementById('tarjeta-numero').value = '';
        document.getElementById('tarjeta-vencimiento').value = '';
        document.getElementById('tarjeta-cvc').value = '';
        window._esCompraCarrito = true;
    }

    document.getElementById('pedido-form').onsubmit = function (e) {
        e.preventDefault();
        if (window._esCompraCarrito) {
            mostrarResumenFacturaCarrito();
            window._esCompraCarrito = false;
        }
    };

    function mostrarResumenFacturaCarrito() {
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value;
        const tarjeta = document.getElementById('tarjeta-numero').value;
        let total = 0;
        let productosCopia = carrito.map(item => ({ ...item })); // COPIA REAL DEL CARRITO
        let productosHTML = '';
        productosCopia.forEach(item => {
            productosHTML += `<div><span>Producto:</span> <strong>${item.nombre}</strong> x${item.cantidad} - ${formatearPrecio(item.precio * item.cantidad)}</div>`;
            total += item.precio * item.cantidad;
        });
        const resumenHTML = `
        <div class="factura-datos">
            ${productosHTML}
            <div><span>Nombre:</span> <strong>${nombre}</strong></div>
            <div><span>Teléfono:</span> <strong>${telefono}</strong></div>
            <div><span>Dirección:</span> <strong>${direccion}</strong></div>
            <div><span>Tarjeta:</span> <strong>${tarjeta ? tarjeta : 'No ingresada'}</strong></div>
            <div class="factura-total"><span>Total:</span> <strong>${formatearPrecio(total)}</strong></div>
        </div>
        <div class="factura-gracias">¡Gracias por tu compra!</div>
        <button id="descargar-recibo-modal" style="margin-top:1rem;">Descargar factura</button>
    `;
        document.getElementById('pedido-resumen').innerHTML = resumenHTML;
        document.getElementById('pedido-resumen').classList.remove('oculto');
        document.getElementById('pedido-form').style.display = 'none';
        // Descargar factura
        setTimeout(() => {
            const btnDescargar = document.getElementById('descargar-recibo-modal');
            if (btnDescargar) {
                btnDescargar.innerHTML = '<i class="fas fa-file-pdf"></i> Descargar ticket PDF';
                btnDescargar.classList.add('btn-confirmar-pedido');
                btnDescargar.style.background = 'linear-gradient(90deg,#ff9800 0%,#43e97b 100%)';
                btnDescargar.style.color = '#fff';
                btnDescargar.style.fontWeight = 'bold';
                btnDescargar.style.fontSize = '1.1rem';
                btnDescargar.style.letterSpacing = '1px';
                btnDescargar.onclick = function () {
                    // Generar PDF con productosCopia y total
                    if (!window.jspdf || !window.jspdf.jsPDF) {
                        alert('No se pudo generar el PDF. Intente actualizar la página.');
                        return;
                    }
                    const { jsPDF } = window.jspdf;
                    const doc = new jsPDF({ unit: 'mm', format: [80, 150] });
                    let y = 10;
                    doc.setFont('courier', 'bold');
                    doc.setFontSize(14);
                    doc.text('Local de Comidas', 40, y, { align: 'center' });
                    y += 6;
                    doc.setFontSize(10);
                    doc.setFont('courier', 'normal');
                    doc.text('Av. Principal 123 - Tel: 3544-637516', 40, y, { align: 'center' });
                    y += 5;
                    const fecha = new Date();
                    const fechaStr = fecha.toLocaleDateString('es-AR') + ' ' + fecha.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
                    doc.text('Fecha: ' + fechaStr, 8, y);
                    y += 5;
                    doc.text('----------------------------------------', 40, y, { align: 'center' });
                    y += 5;
                    doc.setFont('courier', 'bold');
                    doc.text('DETALLE', 8, y);
                    y += 5;
                    doc.setFont('courier', 'normal');
                    productosCopia.forEach(item => {
                        doc.text(`${item.nombre} x${item.cantidad}`, 8, y);
                        doc.text(`$${item.precio * item.cantidad}`, 65, y, { align: 'right' });
                        y += 5;
                    });
                    y += 2;
                    doc.text('----------------------------------------', 40, y, { align: 'center' });
                    y += 6;
                    doc.setFont('courier', 'bold');
                    doc.text('TOTAL:', 8, y);
                    doc.text(`$${total}`, 65, y, { align: 'right' });
                    y += 8;
                    doc.setFont('courier', 'normal');
                    doc.text('Cliente:', 8, y);
                    y += 5;
                    doc.text(`Nombre: ${nombre}`, 8, y);
                    y += 5;
                    doc.text(`Tel: ${telefono}`, 8, y);
                    y += 5;
                    doc.text(`Dirección: ${direccion}`, 8, y);
                    y += 7;
                    doc.setFont('courier', 'bold');
                    doc.setFontSize(12);
                    doc.text('¡Gracias por tu compra!', 40, y, { align: 'center' });
                    y += 6;
                    doc.setFont('courier', 'normal');
                    doc.setFontSize(9);
                    doc.text('Conserva este ticket para reclamos.', 40, y, { align: 'center' });
                    doc.save('ticket.pdf');
                    // Limpiar historial visual de compra
                    document.getElementById('pedido-resumen').innerHTML = '';
                    document.getElementById('pedido-resumen').classList.add('oculto');
                    document.getElementById('pedido-form').style.display = '';
                    document.getElementById('pedido-modal').classList.add('oculto');
                };
            }
        }, 100);
        // Vaciar carrito
        carrito = [];
        actualizarCarritoUI();
    }

    // --- Búsqueda en Tiempo Real ---
    function filtrarProductos(filtroFn) {
        const productosLista = document.getElementById('productos-lista');
        productosLista.innerHTML = '';
        productosLista.setAttribute('aria-live', 'polite');
        let filtrados = productosSeccion.filter(filtroFn);
        if (filtrados.length === 0) {
            const p = document.createElement('p');
            p.style.textAlign = 'center';
            p.style.color = '#888';
            p.style.fontSize = '1.2rem';
            p.textContent = 'No hay productos que coincidan con la búsqueda.';
            productosLista.appendChild(p);
            return;
        }
        filtrados.forEach((item, idx) => {
            // ...igual a mostrarProductosCategoria, pero usando filtrados...
            const div = document.createElement('div');
            div.className = 'producto-card';
            let titulo = 'Producto';
            let detalle = '';
            if (typeof item.descripcion === 'string') {
                const partes = item.descripcion.split(':');
                titulo = partes[0] ? partes[0] : 'Producto';
                detalle = partes[1] ? partes[1].trim() : '';
            }
            const img = document.createElement('img');
            img.src = item.imagen;
            img.alt = titulo;
            img.className = 'menu-img';
            img.loading = 'lazy';
            div.appendChild(img);

            const h3 = document.createElement('h3');
            h3.textContent = titulo;
            div.appendChild(h3);

            const pDetalle = document.createElement('p');
            pDetalle.className = 'producto-detalle';
            pDetalle.textContent = detalle;
            div.appendChild(pDetalle);

            const spanPrecio = document.createElement('span');
            spanPrecio.className = 'producto-precio';
            spanPrecio.textContent = `$${item.precio}`;
            div.appendChild(spanPrecio);

            const btnAnadir = document.createElement('button');
            btnAnadir.className = 'producto-anadir-btn';
            btnAnadir.setAttribute('data-id', item.id);
            const iconoAdd = document.createElement('i');
            iconoAdd.className = 'fas fa-plus-circle';
            iconoAdd.setAttribute('aria-hidden', 'true');
            btnAnadir.appendChild(iconoAdd);
            const spanAdd = document.createElement('span');
            spanAdd.className = 'visually-hidden';
            spanAdd.textContent = 'Añadir ';
            btnAnadir.appendChild(spanAdd);
            btnAnadir.appendChild(document.createTextNode(titulo));
            div.appendChild(btnAnadir);

            const aWhatsapp = document.createElement('a');
            aWhatsapp.className = 'producto-whatsapp-btn';
            aWhatsapp.href = `https://wa.me/5493544637516?text=Hola%2C%20quiero%20pedir%20una%20${encodeURIComponent(titulo)}`;
            aWhatsapp.target = '_blank';
            aWhatsapp.rel = 'noopener';
            aWhatsapp.style.display = 'inline-block';
            aWhatsapp.style.marginTop = '0.7rem';
            aWhatsapp.style.background = '#25d366';
            aWhatsapp.style.color = '#fff';
            aWhatsapp.style.padding = '0.7rem 1.2rem';
            aWhatsapp.style.borderRadius = '8px';
            aWhatsapp.style.fontWeight = 'bold';
            aWhatsapp.style.textDecoration = 'none';
            aWhatsapp.style.fontFamily = "'Roboto',Arial,sans-serif";
            aWhatsapp.style.boxShadow = '0 2px 8px #25d36640';
            aWhatsapp.style.transition = 'background 0.2s';
            const iconoWA = document.createElement('i');
            iconoWA.className = 'fab fa-whatsapp';
            iconoWA.setAttribute('aria-hidden', 'true');
            aWhatsapp.appendChild(iconoWA);
            const spanWA = document.createElement('span');
            spanWA.className = 'visually-hidden';
            spanWA.textContent = 'Pedir por WhatsApp ';
            aWhatsapp.appendChild(spanWA);
            aWhatsapp.appendChild(document.createTextNode('Pedir por WhatsApp'));
            div.appendChild(aWhatsapp);

            productosLista.appendChild(div);
            setTimeout(() => {
                div.classList.add('mostrar');
            }, 60 * idx);
        });
    }

    // Mejora Progresiva: Registrar Service Worker si está disponible
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('SW registrado'))
            .catch(err => console.log('Error SW:', err));
    }

    // Previews de Productos: zoom de imagen al pasar el mouse
    document.addEventListener('DOMContentLoaded', function () {
        // Esperar a que los productos estén renderizados
        setTimeout(() => {
            document.querySelectorAll('.producto-card').forEach(card => {
                const img = card.querySelector('img');
                if (!img) return;
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    img.style.transformOrigin = `${x}px ${y}px`;
                    img.style.transition = 'transform 0.2s';
                    img.style.transform = 'scale(2)';
                    img.style.zIndex = 2;
                });
                card.addEventListener('mouseleave', () => {
                    img.style.transform = '';
                    img.style.zIndex = '';
                });
            });
        }, 400);
    });
})();