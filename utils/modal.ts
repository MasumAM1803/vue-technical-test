export const modal = (isOpen: any) => {
    if (window.innerWidth < 640) {
        if (isOpen.value) {
            document.getElementById('logo-sidebar')?.classList.remove('-translate-x-full')
            document.getElementById('drawer-backdrop')?.classList.remove('hidden')
            isOpen.value = false;
            closeModal(isOpen)
        } else {
            document.getElementById('logo-sidebar')?.classList.add('-translate-x-full')
            document.getElementById('drawer-backdrop')?.classList.add('hidden')
            isOpen.value = true;
        }
    } else {
        if (isOpen.value) {
            document.getElementById('topnav-right-side')?.classList.remove('sm:ms-64')
            document.getElementById('topnav-right-side')?.classList.add('sm:ms-20')
            document.getElementById('logo-sidebar')?.classList.remove('w-64')
            document.getElementById('logo-sidebar')?.classList.remove('-translate-x-full')
            document.getElementById('sidebar-menu-home')?.classList.add('hidden')
            document.getElementById('sidebar-menu-product')?.classList.add('hidden')
            isOpen.value = false;
        } else {
            document.getElementById('topnav-right-side')?.classList.add('sm:ms-64')
            document.getElementById('topnav-right-side')?.classList.remove('sm:ms-20')
            document.getElementById('logo-sidebar')?.classList.add('w-64')
            document.getElementById('logo-sidebar')?.classList.add('-translate-x-full')
            document.getElementById('sidebar-menu-home')?.classList.remove('hidden')
            document.getElementById('sidebar-menu-product')?.classList.remove('hidden')
            isOpen.value = true;
        }
    }
}

const closeModal = (isOpen: any) => {
    document.getElementById('drawer-backdrop')?.addEventListener('click', () => {
        document.getElementById('logo-sidebar')?.classList.add('-translate-x-full')
        document.getElementById('drawer-backdrop')?.classList.add('hidden')
        isOpen.value = true;
    })
}